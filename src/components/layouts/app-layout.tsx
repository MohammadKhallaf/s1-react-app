import AppNavbar from "@/components/molecules/app-navbar";
import { WishlistProvider } from "@/context-store/wishlist-context";
import { useAppDispatch } from "@/hooks";
import { fetchProductsList } from "@/store/product-slice";
import { Suspense, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router";
import "./App.css";

function AppLayout() {
	const dispatch = useAppDispatch();

	// put some delay to simulate fetching data
	useEffect(() => {
		dispatch(fetchProductsList());
	}, [dispatch]);

	return (
		<WishlistProvider>
			{/* AuthProvider */}
			{/* ThemeProvider */}
			<AppNavbar />
			<Container>
				<Suspense fallback={"Loading ... "}>
					<Outlet />
				</Suspense>
			</Container>
		</WishlistProvider>
	);
}

export default AppLayout;
