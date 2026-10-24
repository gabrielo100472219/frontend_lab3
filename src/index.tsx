import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles.css";
import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(<App />);
