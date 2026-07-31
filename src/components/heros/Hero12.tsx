import { Col, Container, Row, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import SwiperSlider3 from '../sliders/SwiperSlider3';

// config
import config from 'config';

const Hero12 = () => {
    return (
        <section className="position-relative overflow-hidden hero-13 pt-7 pt-lg-5 pb-6">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div className="mb-lg-0 mb-5">
                            <h1 className="hero-title">
                                Subtítulos automáticos{' '}
                                <span className="highlight highlight-success d-inline-block">con IA</span> para tus
                                videos
                            </h1>
                            <p className="fs-17 text-muted pt-3">
                                Sube tu video o pega un enlace de YouTube y recibe subtítulos en minutos.
                                Tradúcelos a más de 90 idiomas, edítalos y descárgalos al instante. Sin instalar
                                nada.
                            </p>

                            <div className="pt-5">
                                <Button
                                    className="mb-2"
                                    href={config.APP_URL}
                                    target={config.APP_URL === '#' ? undefined : '_blank'}
                                    rel="noreferrer"
                                >
                                    Comenzar gratis <FeatherIcon className="icon-xs ms-2" icon="arrow-right" />
                                </Button>
                            </div>
                            <div className="d-flex mt-2 fs-12">
                                <div className="me-4">
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    Sin instalar nada
                                </div>
                                <div className="me-4">
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    Prueba gratuita
                                </div>
                                <div>
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    Sin tarjeta de crédito
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container" data-aos="fade-left" data-aos-duration="1000">
                            <div className="slider">
                                <SwiperSlider3 />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero12;
