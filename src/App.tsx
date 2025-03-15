import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/atoms/header";
import Dummy from "./components/dummy";
import HomeSection from "./components/molecules/home-section";

// React props <=> attr HTML
// function someFn() {
// 	useState();// ❌
// }

const count = 5; // api call | external service

const getCountApi = () => {
	return count;
};

// let title = (Math.random() * 100).toString();

function App() {
	// const [currentValue , fnToChangeState] = useState(#); //✅ to follow react render
	// # --> initial State as value 0 | "ahmed" | true
	// # --> ()=> { operation must return "initial State" }
	// if (count === 3) {
	// 	useState(); //❌
	// }

	const [value, setValue] = useState("Services");
	const [title, setTitle] = useState(() => {
		const counter = getCountApi();
		return counter.toString();
	});
	const [show, setShow] = useState(true);

	useEffect(() => {
		console.log("After Title Update", title);

		setShow(+title % 2 !== 0);

		return () => {
			console.log("Destroy to previous value");
			console.log("Before Title Next Change", title);
		};
	}, [title]);

	return (
		<div>
			<HomeSection label={value} center>
				Lorem ipsum dolor sit
			</HomeSection>
			{show && <Dummy />}
			<HomeSection label="Categories">
				this is the categories section
			</HomeSection>

			<Header label="Atoms" />
			<button
				type="button"
				onClick={() => {
					setValue("Services after click");
				}}
			>
				Change Title
			</button>
			<button
				type="button"
				onClick={() => {
					// setShow(!show);
					setTitle(Math.floor(Math.random() * 100).toString());
				}}
			>
				Generate another value | Toggle
			</button>
			<Header label={title} />
		</div>
	);
}

export default App;
