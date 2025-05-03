import React from 'react';

function Navbar() {

  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const logoStyles = {
    maxHeight: '40px',
    
  };

  const navStyles = {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
  };

  const navLinkStyles = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  };

  const navLinkHoverStyles = {
    color: '#f2a300', // Highlight color on hover
  };

  const searchStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const searchBarStyles = {
    padding: '10px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    width: '250px',
    fontSize: '16px',
  };

  const cartStyles = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  };

  const cartIconStyles = {
    fontSize: '24px',
  };

  const cartCountStyles = {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: '#f2a300',
    color: 'white',
    fontSize: '14px',
    padding: '2px 6px',
    borderRadius: '50%',
  };

  return (
    <header style={navbarStyles}>
      {/* Logo */}
      <div style={logoStyles}>
        <img
          src="data:image/png;base64,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"
          alt="E-commerce Logo"  style={{ height: '50px', width: '60px' }}
        />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul style={navStyles}>
          <li>
            <a href="#" style={navLinkStyles} onMouseEnter={e => e.target.style.color = navLinkHoverStyles.color} onMouseLeave={e => e.target.style.color = ''}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={navLinkStyles} onMouseEnter={e => e.target.style.color = navLinkHoverStyles.color} onMouseLeave={e => e.target.style.color = ''}>
              Shop
            </a>
          </li>
          <li>
            <a href="#" style={navLinkStyles} onMouseEnter={e => e.target.style.color = navLinkHoverStyles.color} onMouseLeave={e => e.target.style.color = ''}>
              Categories
            </a>
          </li>
          <li>
            <a href="#" style={navLinkStyles} onMouseEnter={e => e.target.style.color = navLinkHoverStyles.color} onMouseLeave={e => e.target.style.color = ''}>
              About Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Search Bar and Cart */}
      <div style={searchStyles}>
        <input
          type="text"
          style={searchBarStyles}
          placeholder="Search products..."
        />
        <div style={cartStyles}>
          <span style={cartIconStyles}>🛒</span>
          <span style={cartCountStyles}>3</span> {/* Cart item count */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
