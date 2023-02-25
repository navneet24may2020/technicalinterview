import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setData("");
  };
  return (
    <div className="App">
      <h3>practice1</h3>
      <form onSubmit={handleSubmit}>
        <label>FullName:</label>
        <input
          type="text"
          placeholder="navneet vaibhav"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
      <p>{data}</p>
    </div>
  );
}
