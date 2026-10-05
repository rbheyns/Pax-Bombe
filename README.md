# PAX Makina — Factory Capability Showcase

A responsive, static, bilingual (English / Türkçe) showcase built from factory photos and selected GoPro video previews. Use the EN / TR switch; the selection is remembered, and `?lang=tr` opens the Turkish version. There is no build step or package installation.

## Run locally

Open `index.html` in a browser, or serve this directory with any static web server. The included styles, photos, and video paths are relative, so they work from the repository root and on GitHub Pages.

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages** on GitHub.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose the `main` branch and `/ (root)`, then save.
4. Once deployment finishes, use the Pages URL shown in that settings panel.

## Included evidence

- Optimized WebP stills in `assets/`.
- Eleven edited process/equipment videos plus a 36-second factory overview in `media/clips/`, embedded as 1280 × 720 MP4. Key process stages are retained while repetitive activity is shortened. The overview is silent; the individual process videos retain factory audio. Each export is below 100 MB; the largest is approximately 47.4 MB.
- Original full-resolution camera footage is intentionally kept out of this website repository. Some source clips are over GitHub's 100 MiB individual file limit.

The text describes visible activity in the supplied media. Add independently verified capacity, quality, inspection and compliance documentation before using this as a complete tender submission.

## Machinery showcase

Twelve equipment groups from the supplied factory photos and video review are presented in a bilingual catalog. Native buttons filter cutting, forming, welding and workshop/handling groups; native HTML details reveal further capability information. Categories describe processes rather than asserting a verified machine quantity. Specifications are limited to clearly transcribed nameplate ratings: Baykal shear 3,060 mm / 8 mm St42, Baykal press brake 120 t and Konhidroliksan press 60 t. The company machine list is still required to reconcile identities, quantities and operating limits. Evidence is held in the parent machine-inventory directory.

Design research: [TRUMPF equipment overview](https://www.trumpf.com/en_GB/products/machines-systems/) informed process-based browsing; [W3C disclosure guidance](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) informed expandable details. No third-party code was copied. Implementation uses native HTML/CSS/JavaScript (no added library dependency), supplied PAX photography and optimized lazy-loaded WebP images. Sourced equipment imagery is documented below. Filters expose pressed state, details work with keyboard and without scripting, and the result is tested at desktop and mobile widths. Custom PAX work remaining: company verification of machine names, counts, operating capacities and project suitability.

## Standardized equipment imagery

The machinery catalog uses 22 images, all physically 1200 × 900 WebP, with proportional sizing. The full-width individual-model library follows the active category filter. Eleven sourced product images and eleven factory images are clearly distinguished; originals are preserved. See `assets/machines/image-sources.json` for photo sources and match notes, and `../machine-inventory/MACHINE-IMAGE-SOURCES.md` for rejected mismatches and outstanding publication permissions. No new third-party code or dependencies were introduced.

## Factory showcase

The opening factory tour introduces the workshop in 36 seconds. A dedicated drum-forming feature offers five stage shortcuts; selecting a stage seeks and plays the film. The production gallery uses frames from the supplied footage, linking formed drums, vessel bodies and bent panels to relevant processes. Machinery cards link only to recordings of the corresponding equipment. All copy, stage labels and enquiry subjects are bilingual. Project and visit links open an email draft; they do not submit or send messages. The email is verified against [PAX's official contact page](https://www.paxmakina.com/contact-us). Machine capacities and production suitability still require company confirmation.
