import type { PropsWithChildren } from "react";

function Paragraph({
	children,
	center,
}: PropsWithChildren<{ center?: boolean }>) {
	return (
		<div
			style={{
				textAlign: center ? "center" : "start",
				color: "green",
			}}
		>
			{children}
		</div>
	);
}
export default Paragraph;
