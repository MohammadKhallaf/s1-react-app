import AppLayout from "@/components/layouts/app-layout";
import ProductDetails from "@/components/molecules/product-details";
import ProductList from "@/components/molecules/product-list";
import { createBrowserRouter } from "react-router";

/*
{path,Component,children,index?}[]
*/

export const router = createBrowserRouter([
	{
		path: "",
		Component: AppLayout,
		children: [
			{ path: "/", Component: ProductList },
			{ path: "/categories", Component: () => <h1>Categories</h1> },
			{ path: "/product/:id", Component: ProductDetails},
		],
	},
]);

// 'localhost:5173/' ==>
// nested
// 'localhost:5173/' ==>
// 'localhost:5173/categories/'
