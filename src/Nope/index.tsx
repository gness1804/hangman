import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Nope = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Oops! We could not find the page at <code>{location.pathname}</code>.
        Please try again.
      </p>
      <Link className="nope-back-home-link" to="/">
        Back to Game
      </Link>
    </div>
  );
};

export default Nope;
