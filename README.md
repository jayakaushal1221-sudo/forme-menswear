# FORME Menswear — audited update

This is a minimal improvement pass on the static FORME Menswear demo.

## Files
- `index.html`: adds font preconnects and a stylesheet link, labels the product filter group, converts the unheaded promise strip to a div, and makes dialog controls explicit.
- `styles.css`: removes the CSS `@import` (fonts are linked in HTML), improves muted text/button contrast, and adds visible image-fallback and keyboard-focus styles.
- `app.js`: keeps mobile-menu ARIA state synchronized, adds dialog focus management/Tab trapping/Escape handling, uses a readable image fallback, adds async image decoding, and exposes filter selection via `aria-pressed`.

## Important limitations
- Product names, prices and Unsplash images remain illustrative.
- WhatsApp actions are enquiries, not confirmed orders or payments.
- This is a static frontend with no database or inventory backend.
- The live deployment must be retested after uploading these files. No claim is made that the site is error-free.
