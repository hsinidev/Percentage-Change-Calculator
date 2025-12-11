
# Percentage Change Calculator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3.3.3-cyan.svg)](https://tailwindcss.com/)

A professional-grade, high-performance financial analytics tool built with React and TypeScript. This application allows users to instantly calculate percentage increases and decreases while providing deep educational context through a comprehensive SEO-optimized guide.

Designed with a modern "Cosmic" UI, it offers a seamless user experience across all devices.

---

### **🚀 [LIVE DEMO: doodax.com](https://doodax.com/tools/percentage-change-calculator/index.html)**
*(Click to open in a new tab)*

---

## ✨ Key Features

- **⚡ Instant Calculations**: Real-time processing of financial data to determine percentage shifts.
- **🌌 Immersive UI**: Features a custom-animated nebula background with multi-layered parallax effects.
- **📊 Dynamic Feedback**: Visual cues for "Increase" (Green) vs "Decrease" (Red) with raw difference data.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **📚 Educational Hub**: Contains a 3,500+ word structured guide on financial metrics, expandable via a smooth UI toggle.
- **⚖️ Compliance Ready**: Includes detailed, modal-based Privacy Policy, Terms of Service, and DMCA pages.
- **🔎 SEO Optimized**: Built with `react-helmet` equivalent meta tags and comprehensive JSON-LD Structured Data (Schema.org).

## 📂 Project Structure

```bash
percentage-change-calculator/
├── public/
│   ├── favicon.svg      # Branded application icon
│   ├── robots.txt       # Search engine crawler directives
│   └── sitemap.xml      # XML Sitemap for SEO discovery
├── components/
│   ├── PercentageChangeCalculator.tsx  # Core logic and UI for the tool
│   └── ThemeLayout.tsx                 # Main wrapper (Background, Header, Footer, Modals)
├── utils/
│   ├── math.ts          # Pure TypeScript calculation logic
│   └── SeoArticle.tsx   # Long-form content & JSON-LD Schemas
├── App.tsx              # Application entry point & layout orchestration
├── index.html           # HTML entry point with Meta tags
├── index.tsx            # React DOM rendering
├── metadata.json        # Project capability definitions
└── README.md            # Documentation
```

## 🧮 Mathematical Logic

The application utilizes the absolute percentage change formula to ensure accuracy even when dealing with negative baselines (e.g., debt reduction):

```typescript
const percentageChange = ((endValue - startValue) / Math.abs(startValue)) * 100;
```

## 🛠️ Setup and Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/percentage-change-calculator.git
    cd percentage-change-calculator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run locally:**
    ```bash
    npm run dev
    ```

## 🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request for any enhancements.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

### **Powered by [HSINI MOHAMED](https://github.com/hsinidev)**
