import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import { router } from "./router/index.tsx";

// library styling
import "bootstrap/dist/css/bootstrap.min.css";
// custom styling @ last
import { store } from "@/store/index.ts";
import { Provider } from "react-redux";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
		<Toaster />
	</Provider>,
);
