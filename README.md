# Will Drucker Creative — Portfolio

Personal portfolio site hosted on GitHub Pages.

## 🚀 Live Site
https://willdruckercreative.github.io  
(or your custom domain)

---

## 📝 How to Edit Content

### Change Your Info
Open `index.html` and search for `EDIT:` comments to find everything you need to change:
- Hero tagline
- About bio
- Email address
- Social links

### Add a New Project
1. Add your image to the `images/` folder
2. In `index.html`, copy an existing `<a class="project-card">` block inside the project grid
3. Update the image `src`, `alt`, title, and category
4. Duplicate `projects/project-template.html`, rename it, and customize the content

### Remove a Project
Delete the `<a class="project-card">...</a>` block from `index.html`.

### Change Colors
Open `css/style.css` and edit the CSS variables at the top:
```css
:root {
  --color-bg: #fafafa;        /* Background */
  --color-text: #1a1a1a;      /* Main text */
  --color-text-light: #6b6b6b; /* Secondary text */
  --color-accent: #2a2a2a;    /* Buttons & accents */
}
