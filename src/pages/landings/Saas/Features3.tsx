import { Row, Col, Container } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// config
import config from 'config';

const Features3 = () => {
    return (
        <section className="position-relative pb-6 pt-lg-6 pt-4 features-3">
            <Container data-aos="fade-up" data-aos-duration="500">
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h3 className="fw-medium mb-5">Y mucho más</h3>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Subtítulos en 90+ idiomas
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Traducción automática
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Exporta SRT, VTT y ASS
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Edición en línea
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Doblaje con voces IA
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Videos de YouTube y más
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Sin instalar nada
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Funciona en cualquier dispositivo
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Resúmenes con IA
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Exporta a DOCX y PDF
                        </h6>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs="auto">
                        <a href={config.APP_URL} className="btn btn-primary mb-2">
                            Comenzar gratis ahora <FeatherIcon className="icon-xs ms-2" icon="arrow-right" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features3;
