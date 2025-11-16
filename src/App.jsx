// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Table from "./components/Table";

export default function App() {
  const [open, setOpen] = useState(false);

  const columns = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>UI Komponen Reusable</h1>

      <Card>
        <h3>Button</h3>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Button variant="outline" style={{ marginLeft: "8px" }}>
          Outline
        </Button>
      </Card>

      <Card>
        <h3>Table</h3>
        <Table columns={columns} data={data} />
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3>Ini Modal</h3>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
}
