import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// config
import config from 'config';

const Footer1 = () => {
    return (
        <section id="contact" className="mt-lg-5 pt-5 pb-4 bg-gradient3 position-relative">
            <Container>
                <Row>
                    <Col xl={4}>
                        <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                            <span className="d-inline-flex align-items-center">
                                <span className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2 icon icon-with-bg icon-xs text-white">
                                    <FeatherIcon icon="video" className="icon-xs" />
                                </span>
                                <span className="fs-5 fw-semibold text-dark">{config.BRAND_NAME}</span>
                            </span>
                        </Link>
                        <p className="text-muted w-75">
                            Subtítulos automáticos con IA para creadores, periodistas y empresas. Rápido, fácil y sin
                            instalar nada.
                        </p>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase"> Producto</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Funciones
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <a href="#pricing" className="text-muted">
                                        Precios
                                    </a>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Integraciones
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Estado del servicio
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Recursos</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Blog
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Centro de ayuda
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Empresa</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Sobre nosotros
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Contáctanos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Legal</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Política de privacidad
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Términos de servicio
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <p className="pb-0 mb-0 text-muted">
                            {new Date().getFullYear()} © {config.BRAND_NAME}. Todos los derechos reservados.
                        </p>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="facebook" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="twitter" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block">
                                    <Link to="#">
                                        <FeatherIcon icon="linkedin" className="icon icon-xs" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer1;
