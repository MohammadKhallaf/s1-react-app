import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router";
import "./App.css";
import { Suspense } from "react";

function AppLayout() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Link to="/" className="nav-link">
							Home |react router|
						</Link>
						{/* <Nav.Link as={Link} to="/">Home | bootstrap & react router|</Nav.Link> */}
						{/* <Nav.Link  href="/">Home | bootstrap |</Nav.Link> */}

						<Nav.Link as={Link} to="/categories">
							Categories
						</Nav.Link>
						<Nav.Link as={Link} to="/heavy">
							Heavy Component
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<Container>
        <Suspense fallback={"Loading ... "}>

				<Outlet />
        </Suspense>
			</Container>
		</>
	);
}

export default AppLayout;
