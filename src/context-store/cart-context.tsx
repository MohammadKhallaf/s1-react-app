import type { TProduct } from "@/utils/products";
import { createContext, useState, type PropsWithChildren } from "react";

type TCartContext = {
	cart: TProduct["id"][];
	addToCart: (productId: TProduct["id"]) => void;
};

// Declarative
export const CartContext = createContext<TCartContext>({
	cart: [],
	uniqueCart: [],
	addToCart: () => {},
});

// Global state

export function CartProvider({ children }: Readonly<PropsWithChildren>) {
	const [cart, setCart] = useState<TProduct["id"][]>([]);

	function addToCart(productId: TProduct["id"]) {
		setCart((currentCart) => [...currentCart, productId]);
	}

	const uniqueCart = cart.reduce((acc, item: string) => {
		console.log("Count me");
		if (!acc.includes(item)) {
			acc.push(item);
		}
		return acc;
	}, []);

	return (
		<CartContext.Provider value={{ cart, addToCart, uniqueCart }}>
			{children}
		</CartContext.Provider>
	);
}
