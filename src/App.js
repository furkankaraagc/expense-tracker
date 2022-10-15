import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import TrackerProvider from "./context/TrackerContext";
import "./style/style.css";
const App = () => {
  return (
    <div className="app">
      <TrackerProvider>
        <Header />
        <IncomeExpense />
        <AddTransaction />
        <TransactionList />
      </TrackerProvider>
    </div>
  );
};

export default App;
