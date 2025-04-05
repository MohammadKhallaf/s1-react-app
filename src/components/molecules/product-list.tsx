import { CartContext } from "@/context-store/cart-context";
import { WishlistContext } from "@/context-store/wishlist-context";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addToCart } from "@/store/cart-slice";
import { addToWishlist } from "@/store/wishlist-slice";
import { useContext, useMemo } from "react";
import { Button, Container, Stack, Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router";

const ProductList: React.FC = () => {
	const dispatch = useAppDispatch();

	const { list: products, loading } = useAppSelector((state) => state.product);
	const cart = useAppSelector((state) => state.cart.list);

	console.time("cartMemo");
	const starting = performance.now();
	const cartMemo = useMemo(() => {
		const uniqueCart = cart.reduce((acc, item: string) => {
			console.log("Count");
			if (!acc.includes(item)) {
				acc.push(item);
			}
			return acc;
		}, []);

		return uniqueCart;
	}, [cart]);

	const end = performance.now();
	console.timeEnd("cartMemo");

	console.log(
		"Unique cart items count: ",
		cartMemo.length,
		"Time taken: ",
		(end - starting).toFixed(2),
		"ms",
	);

	return (
		<Container className="mt-4">
			<h2 className="mb-4">
				Product List | {cart.length} products in cart
				{/* | {cart.length} products
				in cart memoized */}
			</h2>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>#ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Category</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{loading && (
						<tr>
							<td colSpan={6}>Loading...</td>
						</tr>
					)}
					{products?.map(({ id, name, description, price, category }) => (
						<tr key={id}>
							<td>{id}</td>
							<td>{name}</td>
							<td>{description}</td>
							<td>{price}</td>
							<td>{category}</td>
							<td>
								<Stack gap={2} direction="horizontal">
									<Button
										as={Link}
										to={`/product/${id}`}
										style={{ textWrap: "nowrap" }}
									>
										Details
									</Button>
									<Button
										variant="outline-primary"
										style={{ textWrap: "nowrap" }}
										onClick={() => {
											dispatch(addToCart(id));
											toast.success("Added to cart");
										}}
									>
										Add to cart
									</Button>
									<Button
										variant="outline-warning"
										style={{ textWrap: "nowrap" }}
										onClick={() => {
											dispatch(addToWishlist(id));
											toast.success("Added to wishlist");
										}}
									>
										Add to wishlist
									</Button>
								</Stack>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default ProductList;
