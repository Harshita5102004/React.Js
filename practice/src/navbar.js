import React from 'react';

function Nav() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>To-Do App</h2>
      <ul style={styles.links}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: '1rem 2rem',
    color: 'white'
  },
  title: {
    margin: 0
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  }
};

export default Nav;
