import React, { useState } from 'react';
import Buttons from '../UI/Buttons/Buttons';
import styles from './InvData.module.css';

const InvData = ({ calculateHandler, onResetHandler }) => {
  const [invValues, setInvValues] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    calculateHandler(invValues);
  };

  const resetHandler = () => {
    setInvValues({});
    onResetHandler();
  };

  const inputHandler = ({ target: { id, value } }) => {
    setInvValues((prevValue) => {
      return { ...prevValue, [id]: value };
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input type='number' id='current-savings' onChange={inputHandler} />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={inputHandler}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input type='number' id='expected-return' onChange={inputHandler} />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input type='number' id='duration' onChange={inputHandler} />
        </p>
      </div>
      <Buttons />
    </form>
  );
};

export default InvData;
