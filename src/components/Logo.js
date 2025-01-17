import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <span className="logo--coffee">Coffee Shop</span>
        <span className="logo--grounds">Management System</span>
      </Link>
    </div>
  );
}

export default Logo;