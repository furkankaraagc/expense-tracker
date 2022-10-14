import { useTracker } from "../context/TrackerContext";

const Header = () => {
  const { expense, income, balance } = useTracker();

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>
        Your Balance : {expense > income ? "-" : "+"} ${balance}
      </h2>
    </div>
  );
};

export default Header;
