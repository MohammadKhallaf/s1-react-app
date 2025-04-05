import { useAppSelector } from "@/hooks";
import { faker } from "@faker-js/faker";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

// Reusing the Product type

const ProductDetails: React.FC = () => {
	const params = useParams();
	const { list } = useAppSelector((state) => state.product);

	const productId = params.id;
	const product = list.find((item) => item.id === productId);

	if (!product) return <div>Product Not Found</div>;

	return (
		<Container className="mt-5">
			<Row className="justify-content-center">
				<Col md={8} lg={6}>
					<Card className="shadow-sm rounded-4">
						<Card.Img
							variant="top"
							src={faker.image.urlPicsumPhotos({ width: 600, height: 400 })}
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
