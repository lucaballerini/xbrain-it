export const site = {
  name: 'XBRAIN srl',
  legalName: 'XBRAIN srl',
  tagline: 'Web, E-Commerce, Marketing & IT Heroes',
  url: 'https://www.xbrain.it',
  locale: 'it_IT',
  language: 'it',
  email: 'info@xbrain.it',
  phone: '+390733772292',
  phoneDisplay: '0733 772 292',
  mobile: '+393938795036',
  mobileDisplay: '+39 393 879 5036',
  address: {
    street: 'via Ugo Bassi 1/B',
    city: 'Civitanova Marche',
    region: 'MC',
    postalCode: '62012',
    country: 'IT',
  },
  geo: {
    latitude: 43.3068,
    longitude: 13.7201,
  },
  social: {
    facebook: 'https://www.facebook.com/xbrainsrl/',
    instagram: 'https://www.instagram.com/xbrainsrl/',
    linkedin: 'https://www.linkedin.com/company/xbrain-srl/',
  },
  /** Google Tag Manager — caricato solo dopo consenso analytics (GDPR) */
  gtmId: 'GTM-55J4WXD6',
  /** Opzionale: ID GA4 se usato fuori da GTM. Lasciare vuoto se tutto passa da GTM. */
  ga4Id: '',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo/', label: 'Chi siamo' },
  {
    href: '/cosa-facciamo/',
    label: 'Cosa facciamo',
    children: [
      { href: '/cosa-facciamo/siti-web-e-ecommerce/', label: 'Siti web e ecommerce' },
      { href: '/cosa-facciamo/web-marketing-e-social-media/', label: 'Web marketing e social media' },
      { href: '/cosa-facciamo/sviluppo-applicazioni-iphone-e-ipad/', label: 'App iOS e Android' },
      { href: '/cosa-facciamo/consulenza-e-assistenza-it/', label: 'Consulenza e assistenza IT' },
    ],
  },
  { href: '/contatti/', label: 'Contatti' },
] as const;

export const services = [
  {
    slug: 'shopify',
    title: 'Shopify',
    href: '/cosa-facciamo/siti-web-e-ecommerce/',
    icon: '/icons/shopify.svg',
    summary:
      'Setup, tema, app e ottimizzazione di store Shopify: dal lancio del negozio alla crescita di conversioni e catalogo.',
  },
  {
    slug: 'ecommerce',
    title: 'eCommerce',
    href: '/cosa-facciamo/siti-web-e-ecommerce/',
    icon: '/icons/cart.png',
    summary:
      'Negozi online da zero o già attivi, con assistenza, sviluppo e integrazioni ERP/gestionale ↔ ecommerce.',
  },
  {
    slug: 'siti-web',
    title: 'Siti web',
    href: '/cosa-facciamo/siti-web-e-ecommerce/',
    icon: '/icons/mac.png',
    summary:
      'Siti vetrina, corporate ed ecommerce con approccio mobile first, design moderno e focus su usabilità e performance.',
  },
  {
    slug: 'web-marketing',
    title: 'Web Marketing',
    href: '/cosa-facciamo/web-marketing-e-social-media/',
    icon: '/icons/web_marketing.png',
    summary:
      'Campagne ecommerce, lead generation, Google Ads, SEO, AEO e GEO per rendere il tuo brand più visibile su motori, AI e clienti giusti.',
  },
  {
    slug: 'social-media',
    title: 'Social media',
    href: '/cosa-facciamo/web-marketing-e-social-media/',
    icon: '/icons/social_media.png',
    summary:
      'Pianificazione, contenuti e campagne sponsorizzate sui principali social per crescere reputazione e audience.',
  },
  {
    slug: 'app',
    title: 'App per iPhone, iPad e Android',
    href: '/cosa-facciamo/sviluppo-applicazioni-iphone-e-ipad/',
    icon: '/icons/app.png',
    summary:
      'Applicazioni mobile native e cross-platform: scegliamo insieme la soluzione più efficace per tempi e costi.',
  },
  {
    slug: 'consulenza-it',
    title: 'Consulenza IT',
    href: '/cosa-facciamo/consulenza-e-assistenza-it/',
    icon: '/icons/consulenza_it.png',
    summary:
      'Soluzioni informatiche integrate per PC, reti LAN e sistemi di sicurezza, dall’infrastruttura al supporto quotidiano.',
  },
] as const;

export const technologies = [
  { name: 'Shopify', logo: '/icons/shopify.svg' },
  { name: 'WordPress', logo: '/icons/wordpress.svg' },
  { name: 'WooCommerce', logo: '/icons/woocommerce.svg' },
  { name: 'PrestaShop', logo: '/icons/prestashop.svg' },
  { name: 'Google Ads', logo: '/icons/google-ads.svg' },
  { name: 'Meta Ads', logo: '/icons/meta.svg' },
  { name: 'iOS', logo: '/icons/apple.svg' },
  { name: 'Android', logo: '/icons/android.svg' },
] as const;
