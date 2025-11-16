export default function Table({ columns, data }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{ background: "#f3f4f6" }}>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td
                key={col.key}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
