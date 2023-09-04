import React from 'react';

const Result = ({ result }) => {
  return (
    <tr>
      <td>{result.year}</td>
      <td>{result.savingsEndOfYear}</td>
      <td>{result.yearlyInterest}</td>
      <td>{result.totalInterest}</td>
      <td>{result.investCapital}</td>
    </tr>
  );
};

export default Result;
