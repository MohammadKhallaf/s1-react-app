import { productsList, type TProduct } from "@/utils/products";
import { createContext, useEffect, useState } from "react";

/* 1 - create context  */
// hint :: for previous versions

/* 2- prepare state for sharing  */

/* 3- inject data in the provider (products)  */

type TProductContext = {
	products: TProduct[];
	loading: boolean;
};

export const ProductsContext = createContext<TProductContext>({});

function ProductsProvider({ children }: { children: React.ReactNode }) {
	const [products, setProducts] = useState<TProduct[]>([]);
	const [loading, setLoading] = useState(true);

	// put some delay to simulate fetching data
	useEffect(() => {
		const t = setTimeout(() => {
			setProducts(productsList);
			setLoading(false);
		}, 5000);

		return () => {
			clearTimeout(t);
		};
	}, []);

	return (
		<ProductsContext.Provider value={{ products, loading }}>
			{children}
		</ProductsContext.Provider>
	);
}
// useSome = ()=>{}

// export const useProductsContext = () => useContext(ProductsContext);

export default ProductsProvider;
