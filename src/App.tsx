import React, { useState } from "react";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <Circle bgColor="tomato" borderColor="black" />
      <Circle bgColor="black" />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="test character"
          value={value}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
