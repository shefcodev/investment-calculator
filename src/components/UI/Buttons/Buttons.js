import React from 'react';
import Calculate from './Calculate';
import Reset from './Reset';
import styles from './Buttons.module.css';

const Buttons = () => {
  return (
    <p className={styles.actions}>
      <Reset />
      <Calculate />
    </p>
  );
};

export default Buttons;
