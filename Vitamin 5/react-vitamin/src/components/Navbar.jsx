import React from 'react'; // Import React to create components
import { Link } from 'react-router-dom';// Import Link to navigate between pages
import './navbar.css';// Import the CSS file for styling



const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/not-home" className="navbar-link">Not Home</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;   
  // Always export your components so they can be imported in other files
  