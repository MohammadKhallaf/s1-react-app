import AppLayout from "@/components/layouts/app-layout";
import ProductDetails from "@/components/molecules/product-details";
import ProductList from "@/components/molecules/product-list";
import NotFound from "@/pages/not-found";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

/*
{path,Component,children,index?}[]
*/

const HeavyComponent = lazy(() => import("@/components/heavy-component"));

export const router = createBrowserRouter([
	{
		path: "",
		Component: AppLayout,
		// errorElement:<h1>Something went wrong!</h1>,
		children: [
			{ path: "/", Component: ProductList },
			{ path: "/categories", Component: () => <h1>Categories</h1> },
			{ path: "/product/:id", Component: ProductDetails },
			{ path: "/heavy", Component: HeavyComponent },
			{ path: "*", Component: () => <NotFound /> },
		],
	},
]);

// 'localhost:5173/' ==>
// nested
// 'localhost:5173/' ==>
// 'localhost:5173/categories/'
