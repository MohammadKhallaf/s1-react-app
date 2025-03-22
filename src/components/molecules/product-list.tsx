import { ProductsContext } from "@/context-store/products-context";
import { useContext } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router";

const ProductList: React.FC = () => {
	const { products, loading } = useContext(ProductsContext);

	return (
		<Container className="mt-4">
			<h2 className="mb-4">Product List</h2>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>#ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Category</th>
						<th>Details</th>
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
								<Button as={Link} to={`/product/${id}`}>
									Details
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default ProductList;
