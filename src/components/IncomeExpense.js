import { useEffect } from "react";
import { useTracker } from "../context/TrackerContext";

const IncomeExpense = () => {
  const { setBalance, income, expense } = useTracker();
  const sumUpIncome = income
    .map((x) => Number(x))
    .reduce((pre, current) => pre + current, 0);
  const sumUpExpense = expense
    .map((x) => Number(x))
    .reduce((pre, current) => pre + current, 0);

  useEffect(() => {
    setBalance(Math.abs(sumUpIncome - sumUpExpense));
  }, [income, expense, setBalance, sumUpExpense, sumUpIncome]);

  return (
    <div className="incomeExpense">
      <div className="income">
        <h2>Income</h2>
        <h2 className="amount">${sumUpIncome}.00</h2>
      </div>
      <div className="expense">
        <h2>Expense</h2>
        <h2 className="amount">${sumUpExpense}.00</h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
