import App from "./app.tsx";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);