# README Design — Casey IT Limited Website

**Date:** 2026-03-25
**Project:** Casey-IT-Website (GitHub repo)
**Deliverable:** `README.md` in the repo root

---

## Goal

Create a `README.md` that serves two audiences:
1. **Potential clients** who discover the repo on GitHub and want to understand what Casey IT Limited does.
2. **Technical viewers / GitHub profile visitors** who want to understand how the site is built and deployed.

Approach: business-first — lead with brand and services, then layer in technical architecture and deployment detail underneath.

---

## Structure

### 1. Header
- Casey IT Limited logo (`assets/logo.png`)
- Repo title: **Casey IT Limited — Company Website**
- One-line description: London-based IT consultancy specialising in Azure cloud architecture, network modernisation, and infrastructure transformation.
- Live site badge/link: `https://casey-it.co.uk`

### 2. Screenshot
- `assets/screenshot-casey-it.png` embedded as a full-width image
- Caption with a link to the live site

### 3. About
- 2–3 sentences: London-based consultancy founded by Matthew Casey in 2019. Serves organisations across property, housing, healthcare, and the arts. Senior-level Azure Solutions Architect Expert with AWS and Terraform credentials.

### 4. Services
Bulleted list of the six service areas from the site:
- Cloud Migration (Azure & AWS)
- Infrastructure Architecture
- Network Modernisation (Cisco Meraki / SD-WAN)
- Microsoft 365 & Azure AD
- Infrastructure as Code (Terraform)
- IT Mobilisation

### 5. Tech Stack
Short bullet list:
- HTML5
- CSS3 (custom, no framework)
- Vanilla JavaScript
- Google Fonts (Inter)
- `sitemap.xml` for SEO

Note: deliberately no build tools, bundler, or JS framework — fast, lightweight, zero dependencies.

### 6. Architecture
Brief explanation:
- Static multi-page site
- Each page is a self-contained `.html` file
- Shared `styles.css` and `animations.js` across all pages
- No backend, no CMS, no bundler

Pages: `index.html`, `about.html`, `services.html`, `case-studies.html`, `portfolio.html`, `contact.html`

### 7. Deployment
- Hosted on **GitHub Pages**
- Deployed automatically from the `main` branch
- Custom domain `casey-it.co.uk` configured via DNS

### 8. Contact
- Email: `info@casey-it.co.uk`
- Website: `https://casey-it.co.uk`
- LinkedIn: `https://www.linkedin.com/in/matthew-casey00/`

---

## Constraints
- No "how to run locally" section — not needed for this project
- Tone: professional, concise — mirrors the brand of the site itself
- No excessive badges or decorative elements that would distract from the business-first message
