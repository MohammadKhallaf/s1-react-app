import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// library styling
import "bootstrap/dist/css/bootstrap.min.css";
// custom styling @ last
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	// <StrictMode>
	<App />,
	// </StrictMode>,
);
