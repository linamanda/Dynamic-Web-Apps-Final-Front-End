import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
    <div className="Form">
      <h1>Sign Up</h1>
      <form onSubmit={(e) => signUpUser(e)}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter Email" />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Enter Username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter Password" />

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUserForm;
