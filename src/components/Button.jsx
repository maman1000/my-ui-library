export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: {
      background: "#2563eb",
      color: "white",
      padding: "8px 14px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
    outline: {
      background: "transparent",
      color: "#2563eb",
      border: "2px solid #2563eb",
      padding: "8px 14px",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };

  return (
    <button style={styles[variant]} {...props}>
      {children}
    </button>
  );
}
