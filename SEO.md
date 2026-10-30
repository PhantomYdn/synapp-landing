# Search and hosting setup

The production origin is **https://synapp.us**. Changes here take effect after
this repository's normal deployment; editing these files does not update the
live website by itself.

## Live audit — 30 October 2026

Direct HTTP checks against the deployed site found:

| Check | Observed result |
| --- | --- |
| Homepage | HTTP 200, but its initial HTML contained no page content, description, or canonical URL. Metadata appeared only after JavaScript ran. |
| `/features` | Redirected to `/features/`, then returned HTTP 404. |
| `/pricing` and `/contact` | Returned HTTP 404 despite working through client-side navigation. |
| `/docs/` | HTTP 200 with rendered content and a description, but no canonical URL. |
| `/robots.txt` and `/sitemap.xml` | HTTP 200; both pointed search engines to `synapp.io`. Documentation pages were absent from the sitemap. |
| HTTP homepage | Redirected to HTTPS successfully. |
| Compression | HTML and XML were delivered with gzip and `Vary: Accept-Encoding`. |
| Hosting/cache | Responses identified GitHub Pages and used a 10-minute cache for successful page responses. |
| `https://www.synapp.us/` | TLS validation failed because the certificate did not cover that hostname. |

This is a technical crawlability audit, not a Lighthouse score or a measurement
of real-user Core Web Vitals.

## What the build now does

Run `npm ci` followed by `npm run build` (Node 22, matching the Pages workflow).
The build:

1. Type-checks and builds the Vue client.
2. Renders every landing page to real HTML, including content, a distinct title
   and description, a self-referencing canonical, Open Graph/Twitter tags, and
   Organization/WebSite/WebPage structured data.
3. Includes each route's CSS and module preloads, then hydrates the same Vue app
   in the browser. Public content stays visible before JavaScript runs.
4. Builds VitePress docs with canonical URLs and sharing metadata.
5. Generates the root sitemap from the built public HTML pages, excluding 404s.
6. Checks metadata, sitemap origins, rendered headings, structured data, and
   local links/assets. Run `npm run check:seo` to repeat these checks on `dist/`.

Landing-page URLs use directories (`/features/`, `/pricing/`, `/contact/`, and
`/privacy-policy/`) so GitHub Pages can serve their `index.html` files directly.
Links without the final slash are redirected by the static host. Existing
screenshots under `/features/` remain available.

The build generates a real `404.html` with `noindex`; the GitHub workflow must
not replace it with a copy of the homepage. `.nojekyll` preserves the static
output. Sitemap entries use absolute production URLs and do not include section
fragments or speculative modification dates.

To add a landing page, register its route in `src/router/index.ts`, add its
metadata in `src/services/seo.service.ts`, call `usePageMeta` in its view, and use
its canonical path in links. New built docs pages are discovered automatically
by sitemap generation. Keep `public/sitemap.xml` aligned for development; the
production sitemap is generated during the build.

## After deployment

- Confirm the homepage, all four landing subpages, and docs return HTTP 200 on
  direct visits. Unknown paths should return HTTP 404.
- Check `https://synapp.us/robots.txt` and `https://synapp.us/sitemap.xml` and submit
  the sitemap through the verified Google Search Console property.
- Configure the `www` DNS alias and GitHub Pages certificate so
  `https://www.synapp.us/` can redirect safely to `https://synapp.us/`. A source
  code change cannot fix the current certificate mismatch.
- The current Privacy Policy view repeats marketing content. Replace it with
  approved policy text; no policy or legal assurances were invented in this
  optimization pass.
- Check mobile PageSpeed Insights and Search Console Core Web Vitals after
  deployment. No performance score or ranking improvement is assumed here.

`nginx.conf` covers an alternative self-hosted deployment: it serves real pages,
returns 404 for missing paths, compresses text responses, and caches hashed
assets for a year while revalidating HTML. It does not control GitHub Pages or
its response headers. TLS and hostname redirects belong at the hosting edge.

References: [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics),
[Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[Vue SSR](https://vuejs.org/guide/scaling-up/ssr.html).
