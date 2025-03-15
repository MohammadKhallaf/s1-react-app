import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/index.tsx";
import { RouterProvider } from "react-router";

// library styling
import "bootstrap/dist/css/bootstrap.min.css";
// custom styling @ last
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
