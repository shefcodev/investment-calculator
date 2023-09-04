import logo from './assets/investment-calculator-logo.png';
import Header from './components/Investment/Header';
import InvData from './components/Investment/InvData';
import Result from './components/Result/Result';

const App = () => {
  const calculateHandler = (userInput) => {

    const yearlyData = []; 

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  };

  return (
    <div>
      <Header src={logo} alt='logo' />
      <InvData />
      <Result />
    </div>
  );
};

export default App;
