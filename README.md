# HiFi Technology — complete website source

A responsive, white-background website starter for a CCTV security shop and domestic/industrial RO water solutions provider.

## Pages
- `index.html` — main landing page with separate CCTV and RO sections, benefits, process and enquiry form.
- `cctv.html` — dedicated CCTV products and enquiry page.
- `ro.html` — dedicated RO/domestic/industrial water solutions page.
- `admin.html` — browser-local admin demo for adding/editing/deleting catalogue products and viewing/exporting enquiries.

## Run locally
1. Extract the ZIP.
2. Open the `hifi-technology-complete` folder.
3. Double-click `index.html`, or use VS Code Live Server for a local web server.
4. Admin demo: open `admin.html`. Username: `admin`; password: `hifi@123`.

## Change shop details
Edit `js/config.js`:
- `shopName`
- `phoneDisplay`
- `phoneDigits` (country code + number, digits only)
- `email`
- `address`
- demo admin username/password

Also replace the demo logo text and social links in the HTML as required.

## Enquiry form behaviour
The front-end form saves a copy in the current browser's `localStorage` and opens WhatsApp with the enquiry pre-filled. The customer must press Send in WhatsApp. This does not send an email or save enquiries to a central database.

## Admin limitations — important
The included admin page is a **local demo only**, not production security. Its credentials and data handling are in browser JavaScript and can be inspected or bypassed. LocalStorage is isolated to one browser/device and is not shared between staff or customers. Before publishing a real admin portal, connect a backend (for example Java/Spring Boot, Node.js, PHP or Firebase), a database, server-side authentication, role permissions, secure file uploads, validation, backups and HTTPS. Never publish the demo credentials.

## Images and animations
The hero uses CSS illustrations and animated product cards. `assets/design-reference.png` is a visual design reference. Replace CSS product illustrations with your own genuine product photos and installation images before launch. AOS and Font Awesome are loaded from CDNs; internet access is required for those external assets. Core layout and CSS animations are local.

## Suggested production stack
Frontend: this HTML/CSS/JavaScript starter (or React/Next.js when needed). Backend: Spring Boot or Node.js. Database: MySQL/PostgreSQL. Admin: server-side login with hashed passwords and role-based access. Image storage: S3-compatible storage or managed media hosting.
