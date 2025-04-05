import { useAppSelector } from "@/hooks";
import { Navigate } from "react-router";

export default function ProtectedRoute({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const role = useAppSelector((state) => state.auth.role);

	if (role === "guest") {
		return <Navigate to="/" replace />;
	}

	return <>{children}</>;
}

export const HOCProtectedRoute = (Component: React.FC) => {
	return function WrappedComponent(props: any) {
		const role = useAppSelector((state) => state.auth.role);

		if (role === "guest") {
			return <Navigate to="/" replace />;
		}

		return <Component {...props} />;
	};
};
