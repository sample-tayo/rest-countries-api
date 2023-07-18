export function Filter() {
  const style = {
    backgroundColor: "var(--DarkBlue)",
    color: "var(--White)",
    fontFamily: "inherit",
    border: "none",
    // borderRadius: "1rem",
    padding: "1.2rem 3.2rem",
    fontWeight: 300,
    fontSize: "1.8rem",
    cursor: "pointer",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <select value="" style={style}>
      <option value="asia" style={style}>
        ASIA
      </option>
      <option value="africa" style={style}>
        Africa
      </option>
      <option value="america" style={style}>
        America
      </option>
      <option value="europe" style={style}>
        Europe
      </option>
      <option value="oceanic" style={style}>
        Oceanic
      </option>
    </select>
  );
}
