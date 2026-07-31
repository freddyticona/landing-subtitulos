# SubtitlePro — Landing Page

Página web de presentación para el servicio de subtítulos automáticos con IA. Construida con React (Create React App) y la plantilla Prompt de Coderthemes.

## 🚀 Comandos

```bash
npm install      # instala dependencias
npm start        # modo desarrollo → http://localhost:3000
npm run build    # genera la versión de producción en /build
```

## ✏️ Personalización rápida

Todo lo importante está en `src/config.ts`:

```ts
const config = {
    APP_URL: '#',                    // ← URL de tu app cuando esté publicada
    BRAND_NAME: 'SubtitlePro',       // ← nombre de tu marca
};
```

Los textos de la página están en español en estos archivos:

| Sección | Archivo |
|---|---|
| Portada (hero) | `src/components/heros/Hero12.tsx` |
| Funciones y planes | `src/pages/landings/Saas/data.ts` |
| Secciones de funciones | `src/pages/landings/Saas/Features*.tsx` |
| Testimonios | `src/components/sliders/data.ts` |
| Preguntas frecuentes | `src/components/FAQContent.tsx` |
| Menú | `src/components/navbars/Menu.tsx` |
| Pie de página | `src/components/footer/Footer1.tsx` |

## ☁️ Publicar en Vercel (gratis)

1. Sube este proyecto a un repositorio de GitHub:

```bash
git init
git add .
git commit -m "Landing SubtitlePro"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/landing-subtitulos.git
git push -u origin main
```

2. Entra a [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Framework: **Create React App** (Vercel lo detecta solo).
4. Clic en **Deploy**. En unos minutos tendrás tu URL pública.
