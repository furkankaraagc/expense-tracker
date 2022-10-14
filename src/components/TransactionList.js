import { useTracker } from "../context/TrackerContext";

const TransactionList = () => {
  const { transaction, setTransaction } = useTracker();

  return (
    <div>
      <ul>
        {transaction.map((transactions) => (
          <li key={transactions.id}>
            {transactions.title} <span>${transactions.amount}</span>
            <button
              onClick={() =>
                setTransaction(
                  transaction.filter((x) => x.id !== transactions.id)
                )
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
