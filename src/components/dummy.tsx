import { useEffect, useLayoutEffect } from "react";

function Dummy() {
	useEffect(() => {
		// callback ==> action
		console.log("dummy component mounted");

		return () => {
			console.log("dummy component destroyed");
		};
	}, []);
	// console.log("Dummy component mounted");

	useLayoutEffect(() => {
		console.log("dummy component before mount");
		return () => {
			console.log("dummy component layout effect unmounted");
		};
	}, []);

	return (
		<div
			style={{
				background: "red",
			}}
		>
			This is the dummy Component
		</div>
	);
}
export default Dummy;
