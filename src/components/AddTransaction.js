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
    setTransaction([
      ...transaction,
      { title: title, amount: amount, id: Math.random() },
    ]);
    setAmount("");
    setTitle("");
    checkHandler();
    e.preventDefault();
  };
  const checkHandler = () => {
    if (ref1.current.checked) {
      setIncome([...income, amount]);
    } else {
      setExpense([...expense, amount]);
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
          required
        />
        <label htmlFor=""> Amount:</label>
        <input
          onChange={amountHandler}
          value={amount}
          className="amount"
          type="number"
          required
        />
        <div className="radio">
          <div>
            <input
              ref={ref1}
              className="radio1"
              name="radio"
              type="radio"
              defaultChecked
            />
            <label htmlFor="radio1">Income</label>
          </div>
          <div>
            <input ref={ref2} className="radio2" name="radio" type="radio" />
            <label htmlFor="radio2">Expense</label>
          </div>
        </div>

        <button onClick={clickHandler}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
