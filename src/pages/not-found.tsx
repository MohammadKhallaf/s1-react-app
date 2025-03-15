import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Navigate ,useNavigate} from "react-router";

export default function NotFound() {
	const navigate = useNavigate();
	const [countdown, setCountdown] = useState<number>(20);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => prev - 1);
		}, 1000);

		if (countdown === 0) {
			clearInterval(timer);
		}

		return () => clearInterval(timer);
	}, [countdown]);

	if (countdown === 0) return <Navigate to="/" />;

	return (
		<Container
			fluid
			className="vh-100 d-flex justify-content-center align-items-center bg-light"
		>
			<Row>
				<Col>
					<Card className="text-center shadow-lg p-4 rounded-4">
						<Card.Body>
							<h1 className="display-1 fw-bold text-danger">404</h1>
							<h2 className="mb-4">Page Not Found</h2>
							<p className="text-muted mb-4">
								You will be redirected in <strong>{countdown}</strong> seconds.
							</p>
							<Button variant="primary" onClick={() => navigate("/")}>
								Go Home Now
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
