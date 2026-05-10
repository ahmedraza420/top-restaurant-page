# 🍔 Restaurant Website (SPA)

A modern **single-page restaurant website** built as part of The Odin Project curriculum.  
This project focuses on modular JavaScript architecture, dynamic DOM rendering, and client-side routing.

---

## 🚀 Live Demo

🔗 [Live Preview](https://ahmedraza420.github.io/top-restaurant-page/)

---

## 🎨 Design Inspiration

This project is based on a Figma design:

🔗 [Figma Design](https://www.figma.com/community/file/1446174706143044551/customizable-fast-food-restaurant-website-ui-design-desktop-and-mobile-screens-for-burger-lovers)

---

## ⚙️ Tech Stack

- JavaScript (ES6 Modules)
- HTML5 & CSS3
- Webpack (bundler)
- Vanilla DOM manipulation
- Client-side routing (GitHub Pages compatible)

---

## 🧠 Project Overview

This is a **Single Page Application (SPA)** built without frameworks.  
All pages are dynamically rendered using modular JavaScript functions.

Key architectural decisions:

- Pages (Home / Menu / Contact) are generated dynamically
- UI is split into reusable components (header, footer, sections, cards)
- Centralized routing system in `index.js`
- Menu data is fully dynamic and filtered at runtime
- Featured items and categories are generated from a single data source

---

## ✨ Features

### 🧭 Navigation & Routing
- SPA navigation without page reloads
- Browser history support (`back/forward` buttons)
- URL-based routing

### 🏠 Home Page
- Hero section with image slider
- Featured items section (dynamic filtering)
- Gallery section
- Values section
- Call-to-action sections

### 🍽️ Menu Page
- Fully dynamic menu generation from data file
- Category-based filtering (burgers, drinks, sides, etc.)
- Multiple pricing formats (variants supported)
- Nested category support

### 📞 Contact Page
- Contact form layout with validation (UI only)
- Conditional rendering of form fields based on user input
- Static informational section

### 🧩 UI System
- Reusable DOM creation utility (`createElement`)
- Component-based architecture
- SVG handling utility
- Responsive layout adjustments for mobile screens
- Animated navbar toggle

### 🎯 Featured System
- Dynamic featured item filtering from menu data
- Category switching with active indicator
- Data-driven UI updates

---

## 📁 Project Structure
```text
src/
├── index.js                         # App entry point (routing + layout)
├── style.css                        # Global styles
├── template.html                    # Base HTML template

├── assets/
│   ├── images.js                    # Centralized image imports
│   └── images/                      # Static image files

├── components/
│   ├── common/
│   │   └── promotions.js           # Shared/reusable sections
│   │
│   ├── contact/
│   │   └── contact.js              # Contact page module
│   │
│   ├── home/
│   │   └── home.js                 # Home page module
│   │
│   ├── menu/
│   │   └── menu.js                # Menu page module
│   │
│   └── layout/
│       ├── header.js              # Navbar component
│       └── footer.js              # Footer component

├── data/
│   └── menuData.js                # Central menu data source

├── svgs/
│   ├── icons.js                   # Centralized SVG exports
│   └── raw/                       # Raw SVG string assets

└── util/
    ├── createElement.js           # DOM element helper
    └── createSvgFromString.js     # SVG string → DOM helper
```
---

## 🛠️ Installation Steps

### Prerequisites
#### - Node.js (v16+ recommended)
#### - npm (comes with Node.js)
#### - Webpack
#### - Git

### Steps

1. **Clone the repository:**
   ```bash
   git clone git@github.com:ahmedraza420/top-restaurant-page.git
   cd top-restaurant-page
   ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start development server:**
    ```bash
    npm start
    ```
4. **Build production files:**
    ```bash
    npx webpack
    ```
5. **Deploy to GitHub Pages (optional):**
    ```bash
    git checkout gh-pages
    git merge main --no-edit

    npx webpack

    git add dist -f
    git commit -m "deploy"

    git subtree push --prefix dist origin gh-pages

    git checkout main
    ```

## 🧑   

Built as part of The Odin Project curriculum.