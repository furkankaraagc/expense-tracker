import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transaction, setTransaction] = useState([]);

  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [balance, setBalance] = useState("");

  const [isIncome, setIsIncome] = useState(true);

  const data = {
    title,
    setTitle,
    amount,
    setAmount,
    transaction,
    setTransaction,
    income,
    setIncome,
    expense,
    setExpense,
    balance,
    setBalance,
    isIncome,
    setIsIncome,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useTracker = () => useContext(Context);

export default Provider;
