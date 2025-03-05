import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");

  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
      <label htmlFor ="username">UserName: </label>
      <input
        id="username"
        type="text"
        value = {username}
        placeholder="Enter your username"
        onChange={updateUsername}
      />
      <button>Submit</button>
    </div>
  );
}
