import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link
            to="#"
            className={classNames(linkClass, {
                collapsed: !isCurrentEventKey,
            })}
            onClick={decoratedOnClick}
        >
            <Card.Header>
                <h5 className={containerClass}>
                    {children} <FeatherIcon icon="chevron-down" className="icon-xs accordion-arrow" />
                </h5>
            </Card.Header>
        </Link>
    );
};

const FAQContent = () => {
    const faqs = [
        {
            question: '¿Cómo funcionan los subtítulos automáticos?',
            ans: 'Solo subes tu video o pegas el enlace. Nuestra inteligencia artificial transcribe el audio y genera los subtítulos con tiempos precisos en cuestión de minutos.',
        },
        {
            question: '¿Qué formatos de video y audio acepta?',
            ans: 'Aceptamos MP4, MOV, AVI, MKV, WEBM para video, y MP3, WAV, M4A, OGG para audio. También puedes pegar enlaces de YouTube.',
        },
        {
            question: '¿En qué idiomas puedo traducir los subtítulos?',
            ans: 'Puedes traducir a más de 90 idiomas, incluidos español, inglés, portugués, francés, alemán, japonés y muchos más.',
        },
        {
            question: '¿Necesito instalar algún programa?',
            ans: 'No. SubtitlePro funciona directamente en tu navegador, en cualquier dispositivo. Solo necesitas conexión a internet.',
        },
        {
            question: '¿Cuánto cuesta el plan gratuito?',
            ans: 'El plan gratuito es para siempre e incluye hasta 10 minutos de audio por mes, sin tarjeta de crédito. Cuando necesites más, puedes pasar al plan Pro.',
        },
    ];

    return (
        <div id="faqContent">
            <Accordion defaultActiveKey="0" className="custom-accordionwitharrow" id="accordionExample">
                {(faqs || []).map((item, index) => {
                    return (
                        <Card className="mb-2 border rounded-sm" key={index.toString()}>
                            <CustomToggle
                                eventKey={String(index)}
                                containerClass="my-1 fw-medium"
                                linkClass="text-dark"
                            >
                                {item.question}
                            </CustomToggle>
                            <Accordion.Collapse eventKey={String(index)}>
                                <Card.Body className="text-muted pt-1">{item.ans}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default FAQContent;
