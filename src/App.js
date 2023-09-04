import React, { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Header from './components/Investment/Header';
import InvData from './components/Investment/InvData';
import Results from './components/Result/Results';

const App = () => {
  const [invData, setInvData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        key: i,
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investCapital: (currentSavings - totalInterest).toFixed(2),
        yearlyContribution: yearlyContribution,
      });
    }

    setInvData(yearlyData);
    console.log(invData);
  };

  return (
    <div>
      <Header src={logo} alt='logo' />
      <InvData calculateHandler={calculateHandler} />
      <Results results={invData}/>
    </div>
  );
};

export default App;
