# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
E-commerce
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ img
│     ├─ best.png
│     ├─ best2.png
│     ├─ f1.png
│     ├─ f2.png
│     ├─ f3.png
│     ├─ f4.png
│     ├─ login.png
│     ├─ music.png
│     ├─ p1.png
│     ├─ p2.png
│     ├─ p3.png
│     ├─ play.png
│     ├─ Qrcode.png
│     ├─ sales.png
│     ├─ slider1.jpg
│     ├─ slider2.jpg
│     └─ store.png
├─ README.md
├─ src
│  ├─ components
│  │  ├─ AccountDropDown.jsx
│  │  ├─ CartContext.jsx
│  │  ├─ Flash Sales
│  │  │  ├─ CountdownTimer.jsx
│  │  │  └─ SalesCard.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero
│  │  │  ├─ SideBarHero.jsx
│  │  │  └─ Slider.jsx
│  │  ├─ Home
│  │  │  ├─ BestSelling.jsx
│  │  │  ├─ Categories.jsx
│  │  │  ├─ Featured.jsx
│  │  │  ├─ FlashSalles.jsx
│  │  │  ├─ Hero.jsx
│  │  │  ├─ Music.jsx
│  │  │  ├─ Products.jsx
│  │  │  └─ ServicesSection.jsx
│  │  ├─ HomeHeader.jsx
│  │  ├─ NavBar.jsx
│  │  ├─ PromoCard.jsx
│  │  ├─ TopNav.jsx
│  │  ├─ ViewAllButton.jsx
│  │  └─ WishlistContext.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ AuthLayout.jsx
│     ├─ Cart.jsx
│     ├─ Checkout.jsx
│     ├─ Homepage.jsx
│     ├─ Login.jsx
│     ├─ Root.jsx
│     ├─ SignUp.jsx
│     └─ WishList.jsx
└─ vite.config.js

```