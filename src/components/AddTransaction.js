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
    <>
      <form action="">
        <label htmlFor="title">
          {" "}
          Title:
          <input
            onChange={titleHandler}
            value={title}
            className="title"
            type="text"
            required
          />
        </label>
        <label htmlFor="">
          {" "}
          Amount:
          <input
            onChange={amountHandler}
            value={amount}
            className="amount"
            type="number"
            required
          />
        </label>
        <input ref={ref1} name="radio" type="radio" defaultChecked />
        Income
        <input ref={ref2} name="radio" type="radio" />
        Expense
        <button onClick={clickHandler}>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
