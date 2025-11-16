# My UI Library

Dokumentasi untuk proyek **My UI Library** berbasis React + Vite + TailwindCSS.

---

## 🚀 Fitur Utama

* Komponen UI reusable (Button, Card, Input, Modal, dsb.)
* Dibangun menggunakan **React** dan **Vite**
* Styling dengan **TailwindCSS** yang mudah dikustomisasi
* Struktur project yang mudah diperluas

---

## 📦 Instalasi

Pastikan sudah menginstall dependensi:

```bash
npm install
```

Jika muncul error terkait versi Node.js, update Node ke versi minimal **20.19.0**.

---

## 🛠️ Setup TailwindCSS

Tailwind sudah diinstall dengan perintah:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Inisialisasi konfigurasi:

```bash
npx tailwindcss init -p
```

Tambahkan ke `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

Tambahkan ke `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ▶️ Menjalankan Project

Untuk development:

```bash
npm run dev
```

Build untuk production:

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
├── tailwind.config.js
└── vite.config.js
```

---

## 🧩 Cara Membuat Komponen Baru

Contoh: `Button.jsx`

```jsx
export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

Lalu daftarkan ke `components/index.js`:

```js
import Button from "./Button";
export { Button };
```

---

## 📚 Cara Menggunakan di Proyek Lain

Jika nanti library dipublish ke npm:

```bash
npm install my-ui-library
```

Lalu import komponen:

```jsx
import { Button } from "my-ui-library";

export default function Home() {
  return <Button>Hello</Button>;
}
```

---

## 📜 Lisensi

MIT License.

---

## 👨‍💻 Pengembang

**Maman Darusman**
Frontend Developer

GitHub: [https://github.com/maman1000](https://github.com/maman1000)
