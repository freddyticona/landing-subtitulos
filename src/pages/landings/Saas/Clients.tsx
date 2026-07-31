import { Row, Col, Container, Badge } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/amazon.svg';
import google from 'assets/images/brands/google.svg';
import paypal from 'assets/images/brands/paypal.svg';
import spotify from 'assets/images/brands/spotify.svg';
import shopify from 'assets/images/brands/shopify.svg';

const Clients = () => {
    return (
        <section className="section pt-8 pb-6 bg-gradient3 position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row data-aos="fade-up" data-aos-duration="200">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Confían en nosotros
                        </Badge>
                        <h1 className="display-5 fw-medium">La gente inteligente que ya usa SubtitlePro</h1>
                        <p className="text-muted mx-auto">
                            Miles de creadores, periodistas y empresas confían en{' '}
                            <span className="text-primary fw-bold">SubtitlePro</span> para subtitular sus videos cada
                            día
                        </p>

                        <ul className="list-inline mt-5">
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={amazon} alt="" height="32" />
                            </li>
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={google} alt="" height="32" />
                            </li>
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={paypal} alt="" height="32" />
                            </li>
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={spotify} alt="" height="32" />
                            </li>
                            <li className="list-inline-item mx-4 mx-xl-5 mb-3">
                                <img src={shopify} alt="" height="32" />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Clients;
