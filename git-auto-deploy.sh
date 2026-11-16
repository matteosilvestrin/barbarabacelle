#!/usr/bin/env bash
# Plesk deploy for barbarabacelle.es: run by the Git extension after every pull
# ("additional deployment actions": bash git-auto-deploy.sh).
# Installs dependencies from pnpm-lock.yaml, builds the site (vite build +
# prerender + esbuild of the Express server into dist/) and restarts the
# Node.js app (Passenger, startup file dist/index.js).
set -euo pipefail

cd "$(dirname "$0")"

# Plesk installs Node outside the default PATH. NODE_MAJOR matches the
# version selected in Plesk → Node.js (the project is developed on Node 24).
NODE_MAJOR=24
NODE_BIN="/opt/plesk/node/${NODE_MAJOR}/bin"
if [ ! -x "${NODE_BIN}/node" ]; then
  echo "Node ${NODE_MAJOR} not found in ${NODE_BIN}." >&2
  echo "Installed versions: $(ls /opt/plesk/node 2>/dev/null | tr '\n' ' ')" >&2
  echo "If /opt/plesk is not visible, the webspace shell is probably chrooted:" >&2
  echo "set Web Hosting Access → SSH access to /bin/bash." >&2
  exit 1
fi
export PATH="${NODE_BIN}:${PATH}"

# pnpm comes from Corepack, pinned by "packageManager" in package.json.
# "corepack enable" would need write access to NODE_BIN, so call it through
# "corepack pnpm" and keep its cache inside the webspace.
export COREPACK_ENABLE_DOWNLOAD_PROMPT=0
export COREPACK_HOME="${COREPACK_HOME:-$HOME/.cache/node/corepack}"
if command -v pnpm >/dev/null 2>&1; then
  PNPM=(pnpm)
elif command -v corepack >/dev/null 2>&1; then
  PNPM=(corepack pnpm)
else
  echo "Neither pnpm nor corepack found in ${NODE_BIN}." >&2
  exit 1
fi

echo "Deploying $(git rev-parse --short HEAD 2>/dev/null || echo 'unknown commit') with node $(node -v), pnpm $("${PNPM[@]}" -v)"

# The build needs devDependencies (vite, esbuild, tailwind): install them even
# if the shell has NODE_ENV=production.
"${PNPM[@]}" install --frozen-lockfile --prod=false --reporter=append-only
"${PNPM[@]}" run build

# Passenger restarts the app on the next request when this file changes.
mkdir -p tmp
touch tmp/restart.txt

echo "Deploy complete."
