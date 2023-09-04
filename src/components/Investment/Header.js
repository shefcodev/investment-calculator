import React from 'react';
import styles from './Header.module.css';

const Header = ({ src, alt }) => {
  return (
    <header className={styles.header}>
      <img src={src} alt={alt} />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
