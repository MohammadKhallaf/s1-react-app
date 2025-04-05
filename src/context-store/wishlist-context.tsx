import type { TProduct } from "@/utils/products";
import { createContext, useState, type PropsWithChildren } from "react";

type TWishlistContext = {
	wishlist: TProduct["id"][];
	addToWishlist: (productId: TProduct["id"]) => void;
};
export const WishlistContext = createContext<TWishlistContext>({
	wishlist: [],
	addToWishlist: () => {},
});

export function WishlistProvider({ children }: Readonly<PropsWithChildren>) {
	const [wishlist, setWishlist] = useState<TProduct["id"][]>([]);

	function addToWishlist(productId: TProduct["id"]) {
		//raise state up
		setWishlist((currentWishlist) => [...currentWishlist, productId]);
	}

	return (
		<WishlistContext.Provider value={{ wishlist, addToWishlist }}>
			{children}
		</WishlistContext.Provider>
	);
}
