import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    // You can add more logic for handling the form submission here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Login"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      <button onClick={() => props.onFormSwitch("Login")}>
        Already have an account.
      </button>
    </>
  );
};
