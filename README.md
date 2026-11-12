# KEMIZTECH

Source for [kemiztech.com.au](https://kemiztech.com.au), Adam Wood's apps
and creative-tools portfolio, published via GitHub Pages.

- `docs/` — the live site (GitHub Pages serves from this folder on `main`). Migrated
  here from VentraIP's VIPsites builder, which has no way to upload custom files or
  code — including the `app-ads.txt` file Google AdMob requires for authorized-sellers
  verification. `docs/app-ads.txt` and `docs/CNAME` (custom domain) live at the repo
  root of the published site for this reason.
  - `index.html`, `about.html`, `services.html`, `privacy-policy.html` — site pages.
  - `assets.css`, `theme.js` — shared styling and the light/dark theme toggle.
  - The three contact forms (support, business enquiries, app ideas) submit via
    [FormSubmit](https://formsubmit.co) to adam89wood@gmail.com — the first real
    submission to each form triggers a one-time email confirmation from FormSubmit.
- `content/site-copy.md` — superseded snapshot of the old VIPsites copy, kept for
  historical reference.
- `site/index.html` — superseded standalone prototype page (OTGExplorer, OtgxDesktop,
  Salvage only); superseded by `docs/`.

## DNS

`kemiztech.com.au` is registered at VentraIP but DNS now points at GitHub Pages
(A records to GitHub's Pages IPs) instead of VentraIP's VIPsites hosting.
