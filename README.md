# My UI Library

Dokumentasi sederhana untuk proyek **My UI Library**, sebuah kumpulan komponen UI reusable menggunakan **React + Vite** dan **CSS biasa**.

Live Demo: https://my-ui-library-md.netlify.app/
---

## 🚀 Apa Ini?

Project ini berisi komponen–komponen UI seperti:

* Button
* Card
* Modal
* (dan bisa ditambah komponen lain)

Tujuannya: supaya kamu bisa memakai komponen yang sama di berbagai project React.

---

## 📦 Instalasi

Jalankan perintah berikut untuk menginstal semua dependensi:

```bash
npm install
```

---

## 🛠️ Styling

Project **tidak menggunakan TailwindCSS**.
Semua styling memakai **CSS biasa**, ditulis di `src/index.css` atau file CSS lain.

---

## ▶️ Menjalankan Project

Development mode:

```bash
npm run dev
```

Build untuk produksi:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

---

## 📁 Struktur Project

```bash
my-ui-library/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js
```

---

## 🧩 Contoh Komponen

### Button (`Button.jsx`)

```jsx
export default function Button({ children, className = "", ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}
```

### Styling dasar (index.css)

```css
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background: #1d4ed8;
}
```

---

## 📚 Menggunakan di Project Lain (opsional)

Jika nanti library ini dipublish ke npm, kamu bisa menggunakannya seperti:

```bash
npm install my-ui-library
```

Lalu import:

```jsx
import { Button } from "my-ui-library";
```

---

## 👨‍💻 Pengembang

**Maman Darusman** – Frontend Developer

GitHub: [https://github.com/maman1000](https://github.com/maman1000)
