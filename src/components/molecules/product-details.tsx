import { useAppSelector } from "@/hooks";
import type { TProduct } from "@/utils/products";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useSWR from "swr";

// Reusing the Product type

const ProductDetails: React.FC = () => {
	const params = useParams();

	const productId = params.id;
	const { data, error, isLoading } = useSWR(`products/${productId}`, () =>
		axios.get(`https://fakestoreapi.com/products/${productId}`),
	);

	const product = data?.data && {
		id: data?.data.id,
		name: data?.data.title,
		description: data?.data.description,
		price: data?.data.price,
		category: data?.data.category,
		image: data?.data.image,
	};
	// const product = list.find((item) => {
	// 	return item.id.toString() === productId.toString();
	// });
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading product</div>;

	if (!product) return <div>Product Not Found</div>;

	return (
		<Container className="mt-5">
			<Row className="justify-content-center">
				<Col md={8} lg={6}>
					<Card className="shadow-sm rounded-4">
						<Card.Img
							variant="top"
							src={
								product.image ??
								faker.image.urlPicsumPhotos({ width: 600, height: 400 })
							}
							alt={product.name}
							className="rounded-top-4"
						/>
						<Card.Body>
							<h2 className="mb-3">{product.name}</h2>
							<Badge bg="info" className="mb-3 fs-6">
								{product.category}
							</Badge>
							<Card.Text className="text-muted">
								{product.description}
							</Card.Text>
							<h4 className="text-primary">{product.price}</h4>
							<Button variant="primary" className="mt-3 w-100">
								Add to Cart
							</Button>
						</Card.Body>
						<Card.Footer className="text-muted text-center small">
							Product ID: {params.id}
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetails;
