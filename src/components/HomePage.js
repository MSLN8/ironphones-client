import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  const { currentUser } = props;
  return (
    <section>
      <h2>Home Page</h2>
      {currentUser && (
        <p>Hi, {currentUser.fullName}.</p>
      )}
      <p>Welcome to Ironphones! Well have expensive phones.</p>
      <Link to="/phone-list">Buy Your Next Phone</Link>
    </section>
  );
}

export default HomePage;
