# GET FIT asset map for website-building agent

Use these filenames and placements when implementing the single-page GET FIT FITNESS & GYM landing page. Do not randomly substitute or swap images.

## Asset mapping

- `brand/get-fit-logo.png` — Logo / brand mark. Use in header and footer; preserve proportions.
- `hero/hero-gym-background.png` — Primary hero background. Use as a wide cover image behind hero copy; apply dark overlay on the text side.
- `promotions/get-fit-team-banner.png` — Optional team/trainer promotional banner; do not use as an individual trainer portrait.
- `promotions/personal-training-banner.png` — Promotional / booking banner image showing a member in the gym; suitable for personal-training or book-session section.
- `promotions/strength-promotion.png` — Promotional strength-training image; use in transformation or strength campaign banner.
- `promotions/cardio-training-promotion.png` — Promotional workout image featuring a woman with dumbbells; use for personal-training / fitness challenge banner.
- `programs/program-strength-training.jpg` — Exercise program card: Strength Training.
- `programs/program-cardio-hiit.jpg` — Exercise program card: Cardio & HIIT.
- `programs/program-yoga-flexibility.jpg` — Exercise program card: Yoga & Flexibility.
- `programs/program-functional-training.jpg` — Exercise program card: Functional Training.
- `trainers/trainer-arjun.png` — Trainer card 1 / LEFT: Arjun — Strength & Muscle.
- `trainers/trainer-divya.png` — Trainer card 2 / CENTER: Divya — Weight Loss & HIIT.
- `trainers/trainer-karthik.png` — Trainer card 3 / RIGHT: Karthik — Functional Training.

## Placement rules

- **Header and footer:** use `brand/get-fit-logo.png`; preserve aspect ratio and avoid stretching.
- **Hero:** use `hero/hero-gym-background.png` as a full-width background with `background-size: cover` / `object-fit: cover`. Position the focal emblem and equipment so they do not conflict with the headline; add a dark gradient overlay for text contrast.
- **Promotional banners:** use the three files under `promotions/` as section/banner imagery. Keep banner text as live HTML, not baked into the image. `get-fit-team-banner.png` is a group image only, not an individual trainer card.
- **Exercise cards:** map the four files under `programs/` to Strength Training, Cardio & HIIT, Yoga & Flexibility, and Functional Training respectively.
- **Trainer cards:** `trainer-arjun.png` goes in the first/left card, `trainer-divya.png` in the second/center card, and `trainer-karthik.png` in the third/right card. Place each portrait above its live-text details; use `object-fit: cover` and `object-position: center top`.
- **Gallery:** reuse the hero, team, and program photographs as a curated gallery grid if no additional gallery assets are provided; avoid repeating the same image in adjacent tiles.
- **Membership/pricing:** do not use a photo as the pricing card background; use the brand’s charcoal surfaces, thin gold borders, and peach accent `#fed7aa` for the highlighted plan.
- **Contact/booking/testimonials:** use the athlete/promotional photo as a booking-side image; keep form labels, testimonial text, and CTA text as real editable HTML.

## Brand styling

- Accent: `#fed7aa` (warm peach/gold).
- Secondary gray: `#6b7280`.
- Light neutral: `#e5e7eb`.
- Use dark charcoal/black as the main canvas, with warm gold lighting in photos.
- Use the supplied sport display fonts where available; if not installed, use the closest heavy italic/condensed display fallback for headings and a clean sans-serif for body text.
- Keep all sections on one landing page: Home/Hero, promotions, programs, trainers, membership, gallery, booking, testimonials, contact/footer.

## Technical handling

- Preserve image aspect ratios; do not stretch images.
- Use responsive crops: desktop cards can be landscape/portrait as appropriate; on mobile, stack cards and keep faces visible.
- Provide meaningful `alt` text for content images and empty alt for decorative backgrounds.
- Optimize large images for web where practical, while keeping the originals in this asset pack.
- The trainer portraits are supplied as separate images, already mapped by filename; no cropping from the group team image is required.
