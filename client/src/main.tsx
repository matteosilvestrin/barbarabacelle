import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

// Pages prerendered at build time already contain their HTML: hydrate it.
if (root.firstElementChild) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
