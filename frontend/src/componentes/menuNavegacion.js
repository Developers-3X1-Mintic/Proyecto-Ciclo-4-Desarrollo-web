import logopri from "../assets/img/logoDevelopers.svg";
import "../assets/css/StyleCuerpo.css"
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MenuNavegacion = ({ rol }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['id_user', 'role']);

    function salir() {
        if (window.confirm("esta seguro de salir") == true) {
            removeCookie(['id_user'], { path: "/" })
            removeCookie(['role'], { path: "/" })
            window.location.href = "http://localhost:3000/"
        }
    }
    
    return (
        <header className="flex-grow-1">
            <Navbar bg="dark" expand="lg">
                <Container>
                    {rol === "admin" || rol === "user" ? (
                        <Navbar.Brand href="/"><img className="logo_pri" src={logopri} alt="logo" /></Navbar.Brand>
                    ) : (<></>)}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {rol === "admin" || rol === "user" ? (
                            <Nav className="ms-auto">
                                {rol === "admin" ? (
                                <>
                                    <Link className="nav-link boton-menu" to={"/"}>Dashboard</Link>
                                    <Link className="nav-link boton-menu" to="/lista_ventas">Ventas</Link>
                                    <NavDropdown title="Productos" id="basic-nav-dropdown" className="desplegador-menu">
                                        <Link className="dropdown-item" to={"/lista_productos_admin"}>Lista de productos</Link>
                                        <Link className="dropdown-item" to={"/crear_usuario"}>Producto Nuevo</Link>
                                    </NavDropdown>
                                </>
                                ) : (
                                <>
                                    <Link className="nav-link boton-menu" to="/">inicio</Link>
                                    <Link className="nav-link boton-menu" to="/carrito">Carrito</Link>
                                </>
                                )}
                                <Nav.Link className="boton-menu" onClick={salir}>Salir</Nav.Link>
                            </Nav>
                        ) : (
                            <Nav className="me-auto">
                                <Nav.Link href="/">Productos</Nav.Link>
                                <Nav.Link href="/carrito">Carrito</Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};