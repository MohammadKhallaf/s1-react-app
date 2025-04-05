import { useAppSelector } from "@/hooks";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

function AppNavbar() {
	const cart = useAppSelector((state) => state.cart.list);
	const wishlist = useAppSelector((state) => state.wishlist.list);

	const uniqueCart = cart.reduce((acc, item: string) => {
		if (!acc.includes(item)) {
			acc.push(item);
		}
		return acc;
	}, []);

	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="/">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Link to="/" className="nav-link">
						Home
					</Link>
					{/* <Nav.Link as={Link} to="/">Home | bootstrap & react router|</Nav.Link> */}
					{/* <Nav.Link  href="/">Home | bootstrap |</Nav.Link> */}
					<Nav.Link as={Link} to="/categories">
						Categories
					</Nav.Link>
					<Nav.Link as={Link} to="/cart">
						Cart ({uniqueCart.length})
					</Nav.Link>
					<Nav.Link as={Link} to="/wishlist">
						Wishlist ({wishlist.length})
					</Nav.Link>
					<Nav.Link as={Link} to="/heavy">
						Heavy Component
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default AppNavbar;
