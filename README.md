# DeepEd: Global Econ®

[![Live Demo](https://img.shields.io/badge/Live_Demo-deeped.vercel.app-10B981?style=for-the-badge&logo=vercel)](https://deeped.vercel.app/)

An ultra-fast, high-end editorial learning platform. Currently featuring an interactive, magazine-style deep dive into the **Global Economy**. 

Designed as the final project for GNED 07 The Contemporary World, this project pairs blazing-fast static site generation with smooth, buttery React animations to make academic reading feel like flipping through a premium digital magazine.

## 📖 The Content

**DeepEd** decodes the mechanics of the global economy—breaking down how GDP, inflation, central banks, and global trade actually dictate the world around you.

* **Interactive Modules:** Engaging lessons unpacking the realities of supply chains, macroeconomics, and global finance.
* **Supplemental Resources:** Curated educational spotlights including Ray Dalio's *How The Economic Machine Works*, Harvard Business Review articles, and essential reads like *Freakonomics*.
* **Dynamic Facts:** Bite-sized interactive trivia, such as the real-time $9.6 billion daily impact of the 2021 Suez Canal blockage.

## ✨ Key Features

* **Editorial Aesthetics:** A cool blue color palette paired with high-contrast `DM Serif Display` typography for maximum readability.
* **Islands Architecture:** Built on Astro to ship zero JavaScript by default, only hydrating the interactive React/Framer Motion components where strictly necessary.
* **Fluid Animations:** Scroll-triggered fade-ups, spinning badges, and staggered cascades powered by Framer Motion.
* **Fully Responsive:** Impeccable grid layouts that adapt seamlessly from mobile devices to ultrawide desktop monitors.
* **Edge Ready:** Deployed globally on Vercel for instant, edge-cached load times.

## 🛠️ Tech Stack

* **Framework:** [Astro](https://astro.build/)
* **UI Library:** [React 18](https://react.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Package Manager:** [Bun](https://bun.sh/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

Make sure you have **Node.js** (v18.20.8+, v20.3.0+, or v22.0.0+) and **Bun** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ronissanz/huelians.git](https://github.com/ronissanz/huelians.git)
   cd huelians
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

4. **View locally:**
   Open your browser and navigate to `http://localhost:4321`.

## 📁 Repository Structure

```text
├── public/               # Static assets (images, global fonts, etc.)
├── src/                  # Astro pages, React components, and UI modules
├── astro.config.mjs      # Astro configuration and integrations
├── tailwind.config.mjs   # Tailwind CSS v4 setup
├── package.json          # Project dependencies and scripts
├── justfile              # Command runner file for project tasks
└── bun.lock              # Bun lockfile for deterministic installs
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ronissanz/huelians/issues) if you want to contribute to the UI or educational content.

## 📄 License

This project is open-source and available under the standard MIT License.
