import { useRef } from "react";
import { useTracker } from "../context/TrackerContext";

const AddTransaction = () => {
  const {
    setIncome,
    setTransaction,
    transaction,
    setExpense,
    setAmount,
    setTitle,
    amount,
    title,
    income,
    expense,
    isIncome,
    setIsIncome,
  } = useTracker();
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const clickHandler = (e) => {
    if (title !== "" && amount !== "") {
      if (isIncome) {
        setTransaction([
          ...transaction,
          {
            title: title,
            amount: amount,
            id: Math.random(),
          },
        ]);
      } else {
        setTransaction([
          ...transaction,
          {
            title: title,
            amount: -amount,
            id: Math.random(),
          },
        ]);
      }
      setTitle("");
      setAmount("");
    }
    checkHandler();
    e.preventDefault();
  };
  const checkHandler = () => {
    if (title !== "" && amount !== "") {
      if (ref1.current.checked) {
        setIncome([...income, amount]);
      } else {
        setExpense([...expense, amount]);
      }
    }
  };

  return (
    <div className="addTransaction">
      <h2>Add Transaction</h2>
      <hr />
      <form className="form">
        <label htmlFor="title"> Title:</label>
        <input
          onChange={titleHandler}
          value={title}
          className="title"
          type="text"
        />
        <label htmlFor=""> Amount:</label>
        <input
          onChange={amountHandler}
          value={amount}
          className="amount"
          type="number"
        />
        <div className="radio">
          <div>
            <input
              onChange={() => setIsIncome(!isIncome)}
              ref={ref1}
              className="radio1"
              type="radio"
              name="radio"
              id="radio1"
              defaultChecked
            />
            <label className="label1" htmlFor="radio1">
              Income
            </label>
          </div>
          <div>
            <input
              onChange={() => setIsIncome(!isIncome)}
              ref={ref2}
              className="radio2"
              name="radio"
              type="radio"
              id="radio2"
            />
            <label htmlFor="radio2">Expense</label>
          </div>
        </div>

        <button onClick={clickHandler}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
