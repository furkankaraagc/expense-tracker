import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import TrackerProvider from "./context/TrackerContext";

const App = () => {
  return (
    <>
      <TrackerProvider>
        <Header />
        <IncomeExpense />
        <AddTransaction />
        <TransactionList />
      </TrackerProvider>
    </>
  );
};

export default App;
