# XBRAIN.it — sito ufficiale

Rielaborazione moderna del sito [www.xbrain.it](https://www.xbrain.it) su **Astro** (SSG), ottimizzata per Core Web Vitals, SEO tradizionale e GEO (Generative Engine Optimization), con cookie banner GDPR + Google Consent Mode v2 / GTM.

## Perché Astro (non WordPress)

Il sito attuale è WordPress + Astra + Elementor: funzionale, ma pesante per JS/CSS e fragile sui Web Vitals.

| Criterio | WordPress + Elementor | Astro (questa repo) |
|---|---|---|
| LCP / INP / CLS | Dipende da plugin/tema | HTML statico, JS minimo |
| SEO tecnico | Buona con plugin | Nativa (meta, sitemap, schema) |
| Manutenzione | Aggiornamenti WP/plugin | Deploy statico |
| GDPR analytics | Plugin cookie | Consent Mode + GTM gated |
| GEO | Difficile da controllare | `llms.txt`, FAQ, JSON-LD |

**Scelta consigliata:** Astro + hosting edge (Cloudflare Pages / Netlify / Vercel). WordPress resta valido se serve un CMS editoriale frequente; per un sito brochure aziendale Astro è superiore su performance e SEO.

## URL preservate

- `/`
- `/chi-siamo/`
- `/cosa-facciamo/`
- `/cosa-facciamo/siti-web-e-ecommerce/`
- `/cosa-facciamo/web-marketing-e-social-media/`
- `/cosa-facciamo/sviluppo-applicazioni-iphone-e-ipad/`
- `/cosa-facciamo/consulenza-e-assistenza-it/`
- `/contatti/`
- `/informativa-privacy/`
- `/cookie-policy/` (nuova, collegata dal banner)

## Setup

```bash
npm install
npm run dev
npm run build
```

## Configurazione

Modifica `src/data/site.ts`:

- `gtmId` — già impostato a `GTM-55J4WXD6` (come sul sito attuale)
- Contatti, social, coordinate GEO

Il form contatti usa [FormSubmit](https://formsubmit.co) verso `info@xbrain.it` (alla prima submission conferma l’email). In alternativa collega Formspree o un endpoint proprio.

## Deploy

1. Collega il repo a Cloudflare Pages / Netlify / Vercel
2. Build command: `npm run build`
3. Output: `dist`
4. Punta il dominio `www.xbrain.it` e mantieni i redirect 301 da eventuali URL legacy

## Brand

- Colore primario: `#0088ca`
- Logo in `public/images/`
