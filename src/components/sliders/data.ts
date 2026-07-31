// types
import { Slide, Slide1 } from './types';

// images
import Avatar1 from '../../assets/images/avatars/img-8.jpg';
import Avatar2 from '../../assets/images/avatars/img-5.jpg';
import Amazon from '../../assets/images/brands/amazon.svg';
import Google from '../../assets/images/brands/google.svg';

import saas1 from '../../assets/images/hero/saas1.jpg';
import saas2 from '../../assets/images/hero/saas2.jpg';
import saas3 from '../../assets/images/hero/saas3.jpg';

const slides: Slide[] = [
    {
        statement:
            'Subtitulé un video de una hora en menos de 5 minutos. La precisión de la transcripción es increíble y la traducción al inglés quedó perfecta. Lo uso todos los días.',
        customer: {
            avatar: Avatar1,
            name: 'María Fernández',
            designation: 'Creadora de contenido',
        },
        logo: Amazon,
    },
    {
        statement:
            'Como periodista, me ahorra horas de trabajo. Subo la entrevista y recibo los subtítulos listos para publicar en segundos. Es la mejor herramienta que he probado.',
        customer: {
            avatar: Avatar2,
            name: 'Carlos Gómez',
            designation: 'Periodista',
        },
        logo: Google,
    },
];

const slides1: Slide1[] = [
    {
        image: saas1,
        slideTitle: 'Subtítulos profesionales en minutos',
        description:
            'Sube tu video y obtén subtítulos precisos generados por inteligencia artificial.',
    },
    {
        image: saas2,
        slideTitle: 'Traduce a más de 90 idiomas',
        description: 'Llega a audiencias de todo el mundo con un solo clic.',
    },
    {
        image: saas3,
        slideTitle: 'La solución que convierte visitas en clientes',
        description: 'Doblaje, edición y exportación en un solo lugar.',
    },
];

export { slides, slides1 };
