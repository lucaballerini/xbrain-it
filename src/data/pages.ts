/** Pagine canoniche del sito — allineate a routing Astro e sitemap. */
export const pages = [
  {
    path: '/',
    title: 'Home',
    summary:
      'Agenzia digitale a Civitanova Marche: siti web, ecommerce, web marketing, app e consulenza IT. Engagement flessibile e contatto preferito via email.',
  },
  {
    path: '/chi-siamo/',
    title: 'Chi siamo',
    summary: 'Staff XBRAIN: tecnologia e comunicazione integrata per aumentare la visibilità online delle aziende.',
  },
  {
    path: '/cosa-facciamo/',
    title: 'Cosa facciamo',
    summary: 'Panoramica servizi: web/ecommerce, marketing e social, app mobile, IT e networking.',
  },
  {
    path: '/cosa-facciamo/siti-web-e-ecommerce/',
    title: 'Siti web e ecommerce',
    summary:
      'Shopify, WordPress, WooCommerce, PrestaShop, template e custom; app/plugin/moduli; integrazioni ERP/gestionale ↔ ecommerce.',
  },
  {
    path: '/cosa-facciamo/web-marketing-e-social-media/',
    title: 'Web marketing e social media',
    summary: 'SEO, AEO, GEO, Google Ads, SEM/PPC e social media marketing.',
  },
  {
    path: '/cosa-facciamo/sviluppo-applicazioni-iphone-e-ipad/',
    title: 'App iOS e Android',
    summary: 'Sviluppo applicazioni mobile per iPhone, iPad e Android.',
  },
  {
    path: '/cosa-facciamo/consulenza-e-assistenza-it/',
    title: 'Consulenza e assistenza IT',
    summary: 'Infrastrutture, networking, assistenza Linux/Windows/Apple, hosting e posta.',
  },
  {
    path: '/contatti/',
    title: 'Contatti',
    summary: 'Form e email info@xbrain.it (canale preferito); telefono disponibile come alternativa.',
  },
  {
    path: '/informativa-privacy/',
    title: 'Informativa privacy',
    summary: 'Informativa GDPR sul trattamento dei dati personali.',
  },
  {
    path: '/cookie-policy/',
    title: 'Cookie policy',
    summary: 'Cookie policy, consenso e Google Tag Manager / Analytics.',
  },
] as const;

export const pagePaths = pages.map((p) => p.path);
