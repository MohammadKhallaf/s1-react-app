import AppLayout from "@/components/layouts/app-layout";
import { createBrowserRouter } from "react-router";

/*
{path,Component,children,index?}[]
*/

export const router = createBrowserRouter([
	{
		path: "",
		Component: AppLayout,
		children: [
			{ path: "/", Component: () => <h1>Home</h1> },
			{ path: "/categories", Component: () => <h1>Categories</h1> },
		],
	},
]);

// 'localhost:5173/' ==>
// nested
// 'localhost:5173/' ==>
// 'localhost:5173/categories/'
