import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section>
      <h2>Home Page</h2>
      <p>Welcome to Ironphones! Well have expensive phones.</p>
      <Link to="/phone-list">Buy Your Next Phone</Link>
    </section>
  );
}

export default HomePage;
