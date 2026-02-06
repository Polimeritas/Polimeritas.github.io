# Polimeritas Web Platform

This repository contains the source code for the official Polimeritas community website. The platform is built to provide educational resources about polymer science and features interactive gamification modules.

This project has been migrated from a static HTML/jQuery architecture to a modern **Next.js** and **TypeScript** stack.

## Prerequisites

Ensure you have the following installed on your local development environment:

* **Node.js** (v18.17.0 or later)
* **npm** (Node Package Manager)

## Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Polimeritas/Polimeritas.github.io.git](https://github.com/Polimeritas/Polimeritas.github.io.git)
    cd polimeritas-web
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the application**
    Visit `http://localhost:3000` in your browser.

## Project Structure

The project follows a modular architecture to ensure scalability and maintainability.

```text
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── game/             # Game routes (Sorting, Typing, Quiz)
│   ├── about/            # Static pages
│   └── ...
├── components/           # Reusable UI Components
│   ├── common/           # Shared components (Buttons, Modals, Cards)
│   ├── layout/           # Global layout (Navbar, Footer)
│   └── game/             # Game-specific logic engines
│       ├── sorting/      # Sorting game engine & logic
│       ├── typing/       # Typing game engine & logic
│       └── quiz/         # Quiz game engine
├── config/               # Global configuration (Site settings, Navigation)
├── data/                 # Static data (Questions, Items, Articles)
└── lib/                  # Utility functions (cn, formatters)