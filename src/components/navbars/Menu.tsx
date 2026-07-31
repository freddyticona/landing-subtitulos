import { Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';

// config
import config from 'config';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <NavLink to="/landing/saas" end className={({ isActive }) => classNames('nav-link', isActive && 'active')}>
                    Inicio
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <a href="#features" className="nav-link">
                    Funciones
                </a>
            </Nav.Item>
            <Nav.Item as="li">
                <a href="#pricing" className="nav-link">
                    Precios
                </a>
            </Nav.Item>
            <Nav.Item as="li">
                <a href="#faq" className="nav-link">
                    Preguntas
                </a>
            </Nav.Item>

            {showDownload && (
                <>
                    {loggedInUser ? (
                        <Nav.Item as="li">
                            <NavLink to="/auth/logout" className="nav-link btn me-2 shadow-none">
                                Cerrar sesión
                            </NavLink>
                        </Nav.Item>
                    ) : (
                        <Nav.Item as="li">
                            <NavLink to="/auth/login" className="nav-link btn me-2 shadow-none">
                                Iniciar sesión
                            </NavLink>
                        </Nav.Item>
                    )}

                    <Nav.Item as="li">
                        <Link to={config.APP_URL} className={classNames('btn', buttonClass)}>
                            Probar gratis
                        </Link>
                    </Nav.Item>
                </>
            )}
        </Nav>
    );
};

export default Menu;
