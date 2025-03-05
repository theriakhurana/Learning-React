import { useState } from "react";

export default function BetterSignupForm() {
  
  const [formData, setFormData] = useState({firstName : "", lastName : "", password : ""});

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData( currData => {
      return {
        ...currData,
        [changedField] : newValue
      }
    })
  }

  const handleSubmit = () => {
    console.log(formData);
  }
  

  return (
    <div>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        placeholder="firstname"
        value={formData.firstName}
        id="firstname"
        onChange={handleChange}
        name = "firstName"
      ></input>

      <label htmlFor="lastname">Lastname:</label>
      <input
        type="text"
        placeholder="lastname"
        value={formData.lastName}
        id="lastname"
        onChange={handleChange}
        name= "lastName"
      ></input>

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        id="password"
        onChange={handleChange}
        name = "password"
      ></input>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
