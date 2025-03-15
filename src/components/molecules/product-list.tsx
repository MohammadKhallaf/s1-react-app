import { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router";
import { productsList, type TProduct } from "@/utils/products";

const ProductList: React.FC = () => {
	const [products, setProducts] = useState<TProduct[]>(productsList);

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
					{products.map(({ id, name, description, price, category }) => (
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
