import React from "react";

const Logout = ({ handleLogout }) => {
  return (
    <section className="page">
      <nav>
        <h2>Welcome</h2>
        <button onClick={() => handleLogout()}>Logout</button>
      </nav>
    </section>
  );
};

export default Logout;
