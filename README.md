# matteobruno.github.io

Personal academic website for Matteo Bruno.

## Project Structure

```
├── index.html                  ← Main page (all sections)
├── css/
│   ├── base.css                ← Variables, reset, body
│   ├── nav.css                 ← Navigation & hamburger menu
│   ├── components.css          ← Buttons, section titles, footer, animations
│   ├── hero-about.css          ← Hero section & About section
│   ├── research.css            ← Research cards
│   ├── publications.css        ← Publication list
│   ├── teaching.css            ← Teaching card
│   ├── contact.css             ← Contact chips
│   └── responsive.css          ← Breakpoints & language toggle
├── js/
│   └── main.js                 ← Language toggle, nav, scroll, fade-in
├── assets/
│   ├── map-bg.svg              ← Map background illustration
│   ├── photo.jpg               ← YOUR PHOTO (add this)
│   └── CV_Matteo_Bruno.pdf     ← YOUR CV (add this)
└── README.md
```

## Setup

1. **Add your photo** → `assets/photo.jpg`
   Then in `index.html`, replace the placeholder SVG in `.hero-photo` with:
   ```html
   <img src="assets/photo.jpg" alt="Matteo Bruno" style="width:100%;height:100%;object-fit:cover;">
   ```

2. **Add your CV** → `assets/CV_Matteo_Bruno.pdf`

3. **Course materials link** → In the Teaching section, update the `href="#"` to point to your actual course materials URL.

4. **Email** → Verify `matteo.bruno@sony.com` is correct in the Contact section.

## Deploy on GitHub Pages

Since your GitHub username is `mat701`, the site will be at `mat701.github.io`:

```bash
git init
git add .
git commit -m "Initial site"
git remote add origin git@github.com:mat701/mat701.github.io.git
git push -u origin main
```

To use `matteobruno.github.io` instead, you'd need to either:
- Rename your GitHub account to `matteobruno`, or
- Buy a custom domain (e.g. `matteobruno.com`) and configure it via a CNAME file

## Customisation

- **Colors**: Edit `css/base.css` → the `:root` variables
- **Fonts**: Edit `index.html` → the Google Fonts link, then `css/base.css`
- **Publications**: Edit the `.pub-list` in `index.html`
- **Language**: The IT/EN toggle switches via `data-lang` attributes
