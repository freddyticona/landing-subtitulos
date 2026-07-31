import { Row, Col, Container, Badge } from 'react-bootstrap';

// components
import { PricingCards1, PlanItem } from 'components/pricing';

type PricingProps = {
    plans: PlanItem[];
};

const Pricing = ({ plans }: PricingProps) => {
    return (
        <section id="pricing" className="section py-6 py-sm-8 bg-gradient3 position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Planes
                        </Badge>
                        <h1 className="display-5 fw-medium">Planes y precios</h1>
                        <p className="text-muted mx-auto">
                            Precios que <span className="text-primary fw-bold">funcionan</span> para todos
                        </p>
                    </Col>
                </Row>
                <PricingCards1 plans={plans} hasAnimation containerClass="align-items-center mt-0 mt-sm-5" />
            </Container>
        </section>
    );
};

export default Pricing;
