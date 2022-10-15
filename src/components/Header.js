import { useTracker } from "../context/TrackerContext";

const Header = () => {
  const { expense, income, balance } = useTracker();

  return (
    <div className="header">
      <h1 className="header-text">Expense Tracker</h1>
      <h2>Your Balance</h2>
      <h1 className="balance">${balance}.00</h1>
    </div>
  );
};

export default Header;
