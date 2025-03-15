import type { PropsWithChildren } from "react";
import Header from "../atoms/header";
import Paragraph from "../atoms/paragraph";

function HomeSection({
	label,
	center,
	children,
}: PropsWithChildren<{ label: string; center?: boolean }>) {
	return (
		<div>
			<Header label={label} />
			<Paragraph center={center}>{children}</Paragraph>
		</div>
	);
}

export default HomeSection;
