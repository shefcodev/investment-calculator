import React from 'react';
import Result from './Result';
import styles from './Results.module.css';

const Results = ({ results }) => {
  const fallback = <p className={styles.fallback}>No Investment Found.</p>;

  return results.length ? (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <Result result={result} key={result.key} />
        ))}
      </tbody>
    </table>
  ) : (
    fallback
  );
};

export default Results;
