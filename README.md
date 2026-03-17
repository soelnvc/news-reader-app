# 📰 Minimalist News Reader

**A sleek, responsive news aggregator built with React.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📖 About This Project

This application fetches the latest top headlines using the [NewsAPI](https://newsapi.org/). It was designed with a heavy focus on clean UI/UX, utilizing soft shadows, rounded corners, and stark contrasts. 

> 💡 **Design Philosophy:** Content should be front and center. By utilizing a minimalist design and a true-black/dark-grey dark mode, the reader's focus remains entirely on the headlines.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Live API Integration** | Fetches real-time headlines across multiple categories using `useEffect`. |
| **State Management** | Tracks "Read" vs "Unread" articles dynamically using React `useState` and `Sets`. |
| **Category Filtering** | Instantly swap between General, Tech, Business, Sports, Entertainment, and Science. |
| **Expandable Cards** | Click to reveal article descriptions without cluttering the main feed. |
| **True Dark Mode** | Global theme toggling that applies to the `<body>` for a seamless full-screen experience. |

---

## 🛠️ Built With & Acknowledgments

This project was developed as part of a rapid-prototyping exercise, utilizing AI-assisted development workflows:

* **Logic & UI:** Built with [React.js](https://reactjs.org/) and [Vite](https://vitejs.dev/).
* **Styling:** Minimalist CSS designed and refined via **Gemini 3 Flash**.
* **Refinement:** Code cleaning, documentation, and logic comments optimized using **GitHub Copilot**.
* **Data:** Powered by [NewsAPI](https://newsapi.org/).
  
---

## 🚀 How to Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/soelnvc/news-reader-app.git
cd news-reader-app
```
**2) Install Dependencies**
```bash
npm install
```
**3) Set up your API - Create .env**
```bash
VITE_NEWS_API_KEY=your_api_key_here
```
**4) Start development**
```bash
npm run dev
```

