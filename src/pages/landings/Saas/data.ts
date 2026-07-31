// types
import { PlanItem } from 'components/pricing';

import { Feature } from './types';

const features: Feature[] = [
    {
        avatar: 'upload-cloud',
        title: 'Sube tu video o audio',
        description:
            'Arrastra tu archivo o pega un enlace de YouTube. Aceptamos MP4, MOV, MP3, WAV y más. Todo se procesa en segundos.',
        variant: 'primary',
        containerClass: 'd-flex border-bottom pb-4',
    },
    {
        avatar: 'film',
        title: 'Subtítulos generados por IA',
        description:
            'La inteligencia artificial transcribe tu audio palabra por palabra, con tiempos precisos listos para usar en cualquier plataforma.',
        variant: 'success',
        containerClass: 'd-flex border-bottom py-4',
    },
    {
        avatar: 'globe',
        title: 'Traducción a 90+ idiomas',
        description:
            'Traduce tus subtítulos al idioma que quieras con un clic. Perfecto para llegar a audiencias de todo el mundo.',
        variant: 'orange',
        containerClass: 'd-flex pt-4',
    },
];

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Gratis',
        price: '0',
        duration: '/ siempre',
        features: [
            'Hasta 10 minutos de audio',
            'Subtítulos en español e inglés',
            'Exporta SRT y VTT',
            'Prueba la traducción (5 min)',
            'Soporte por correo',
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Pro',
        price: '9',
        duration: '/ mes',
        features: [
            'Hasta 300 minutos al mes',
            'Traducción a 90+ idiomas',
            'Exporta SRT, VTT, ASS y TXT',
            'Edición de subtítulos en línea',
            'Doblaje con voces IA',
            'Soporte prioritario',
        ],
        isRecommended: true,
    },
    {
        id: 3,
        name: 'Empresa',
        price: '29',
        duration: '/ mes',
        features: [
            'Minutos ilimitados',
            'Uso comercial y de equipo',
            'Hasta 10 usuarios',
            'API de integración',
            'Soporte 24/7',
        ],
        isRecommended: false,
    },
];

export { features, plans };
