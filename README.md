# FORME — Modern Menswear (Jabalpur)

A responsive, premium-style static storefront prototype for a men's lifestyle-wear store in Jabalpur, Madhya Pradesh. Built with plain HTML, CSS and JavaScript, so it can be hosted free on GitHub Pages without a build step.

## Included

- Editorial-style landing page with mobile-responsive navigation
- Product catalogue with category filters, search and sorting
- Product details modal with size selection and quantity selector
- Wishlist toggles (temporary for this browser session)
- Shopping bag with quantity controls, item removal and subtotal
- WhatsApp checkout message containing product, size, quantity and subtotal
- Local-store section for Jabalpur, Maps search link and WhatsApp contact
- Basic SEO and social-sharing metadata
- Keyboard-friendly controls and reduced-motion support

## Before you publish

1. **Change the brand name.** Search for `FORME` in `index.html`, `app.js` and `README.md` and replace it with your actual business name.
2. **Set your WhatsApp number.** In `app.js`, update `WHATSAPP_NUMBER` to your store's number with country code, digits only (for India, start with `91`; do not include `+`, spaces or hyphens). The supplied value is a placeholder and must be changed.
3. **Verify every product.** Product titles, prices, sizes, descriptions and photos are sample content. Replace them with your actual inventory and correct prices before accepting orders.
4. **Add your real address and business hours.** The location section currently says Jabalpur, Madhya Pradesh and links to a Maps search, not to a verified store pin. Replace it with your exact address and map URL once ready.
5. **Review image rights and availability.** Demo photos are remotely loaded from Unsplash URLs; use your own product photography for a consistent brand and to ensure the images represent the products you sell.
6. **Know the current limitation.** This is a static frontend. It does not process online payments, store orders in a database, track real inventory, or provide an admin dashboard. Orders are drafted in WhatsApp for confirmation by the store team.

## Preview locally

Open `index.html` in a browser. For a local web server, run from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create or sign in to your GitHub account.
2. Click **New repository**, name it something like `forme-menswear`, and choose **Public** (or use a plan/configuration that supports Pages for a private repository).
3. Upload `index.html`, `styles.css`, `app.js` and `README.md` to the repository's root directory. Keep the three website files together.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, select **Deploy from a branch**. Choose branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish and open the URL shown on the Pages settings screen. For a repository named `forme-menswear`, the URL is typically `https://YOUR-USERNAME.github.io/forme-menswear/`.
7. Open the published site on a phone and test search, category filters, sizes, add-to-bag, quantity changes and WhatsApp checkout.

## Connect WhatsApp

Set `WHATSAPP_NUMBER` in `app.js` to the business number. Use the full international country code with digits only. Click **Order on WhatsApp** in the bag to open a pre-filled order message. The customer still needs to press Send in WhatsApp; payment and fulfilment must be confirmed by the business.

## Folder structure

```text
jabalpur-menswear-site/
├── index.html
├── styles.css
├── app.js
└── README.md
```
