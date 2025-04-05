import { HOCProtectedRoute } from "@/components/protected-route";
import { useAppSelector } from "@/hooks";
import React, { useEffect, useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	ProgressBar,
	Row,
	Spinner,
} from "react-bootstrap";
import { Navigate } from "react-router";

// Generate massive data (this will eat memory)
const generateMassiveDataset = (
	count: number,
): { id: string; value: number }[] => {
	const data: { id: string; value: number }[] = [];
	for (let i = 0; i < count; i++) {
		data.push({
			id: `item-${i}-${Math.random().toString(36).substring(2, 15)}`,
			value: Math.random() * 1000,
		});
	}
	return data;
};

// Perform heavy calculations on the dataset
const heavyCalculationOnDataset = (
	data: { id: string; value: number }[],
): number => {
	let total = 0;
	for (let i = 0; i < data.length; i++) {
		const { value } = data[i];
		total += Math.sqrt(value) * Math.random();
	}
	return total;
};

const HeavyWeightComponent: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [progress, setProgress] = useState<number>(0);
	const [calcResult, setCalcResult] = useState<number | null>(null);
	const [dataset, setDataset] = useState<{ id: string; value: number }[]>([]);

	const startHeavyProcess = () => {
		setIsLoading(true);
		setProgress(0);
		setCalcResult(null);

		let progressCounter = 0;

		// Simulated progress
		const progressInterval = setInterval(() => {
			progressCounter += 10;
			setProgress(progressCounter);

			if (progressCounter >= 100) {
				clearInterval(progressInterval);

				// HEAVY PART HERE:
				const massiveData = generateMassiveDataset(2_000_000); // 2 million items (~1MB+)
				setDataset(massiveData);

				const result = heavyCalculationOnDataset(massiveData);
				setCalcResult(result);
				setIsLoading(false);
			}
		}, 500);
	};

	useEffect(() => {
		startHeavyProcess();
	}, []);

	return (
		<Container className="py-5">
			<Row className="justify-content-center">
				<Col md={8} lg={6}>
					<Card className="text-center shadow-lg rounded-4 p-4">
						<Card.Body>
							<h2 className="mb-4">🧨 Extreme Heavy Component</h2>

							{isLoading ? (
								<>
									<Spinner
										animation="border"
										variant="danger"
										className="mb-3"
									/>
									<p>Hang tight... Crunching through massive data!</p>
									<ProgressBar
										now={progress}
										label={`${progress}%`}
										animated
										striped
										variant="danger"
									/>
								</>
							) : (
								<>
									<h4 className="text-success mb-3">Done!</h4>
									<p>
										<strong>Calc Result:</strong> {calcResult?.toFixed(2)}
									</p>
									<p>
										<strong>Dataset Size:</strong>{" "}
										{dataset.length.toLocaleString()} items
									</p>

									<div
										style={{
											maxHeight: "300px",
											overflowY: "auto",
											border: "1px solid #eee",
										}}
									>
										<ul className="list-unstyled">
											{dataset.slice(0, 100).map((item) => (
												<li key={item.id}>
													{item.id}: {item.value.toFixed(2)}
												</li>
											))}
										</ul>
									</div>

									<Button
										variant="danger"
										className="mt-4"
										onClick={startHeavyProcess}
									>
										Run Again
									</Button>
								</>
							)}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default HOCProtectedRoute(HeavyWeightComponent);
