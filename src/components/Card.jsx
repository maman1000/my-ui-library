export default function Card({ children }) {
  return (
    <div
      style={{
        padding: "16px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        marginBottom: "16px",
      }}
    >
      {children}
    </div>
  );
}
