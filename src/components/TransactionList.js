import { useTracker } from "../context/TrackerContext";

const TransactionList = () => {
  const { transaction, setTransaction } = useTracker();

  return (
    <div className="transactionList">
      <h2>History</h2>
      <hr />
      <ul>
        {transaction.map((transactions) => (
          <li key={transactions.id}>
            <div>{transactions.title} </div>
            <span>${transactions.amount}</span>
            <button
              onClick={() =>
                setTransaction(
                  transaction.filter((x) => x.id !== transactions.id)
                )
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
