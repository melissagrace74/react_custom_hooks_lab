import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const [name, setName] = useLocalStorage("name", "");
  const [service, setService] = useLocalStorage("service", "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "service") setService(value);
  };

  const handleReset = () => {
    setName("");      // reset name
    setService("");   // reset service
  };

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          data-testid="name"
          value={name || ""}
          onChange={handleChange}
        />

        <label htmlFor="service">Service Number:</label>
        <input
          type="text"
          name="service"
          data-testid="service"
          value={service || ""}
          onChange={handleChange}
        />

        <button type="button" onClick={handleReset} style={{ marginTop: "10px" }}>
          Reset
        </button>
      </form>

      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;