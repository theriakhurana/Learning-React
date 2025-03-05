import { useState } from "react";

export default function SignupForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const updateFirstname = (evt) => {
    setFirstname(evt.target.value);
  }

  const updateLastname = (evt) => {
    setLastname(evt.target.value);
  }

  const handleSubmit = () =>{
    console.log(firstname, lastname);
  }
  return (
    <div>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        placeholder="firstname"
        value={firstname}
        id="firstname"
        onChange={updateFirstname}
      ></input>

      <label htmlFor="lastname">Lastname:</label>
      <input
        type="text"
        placeholder="lastname"
        value={lastname}
        id="lastname"
        onChange={updateLastname}
      ></input>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
