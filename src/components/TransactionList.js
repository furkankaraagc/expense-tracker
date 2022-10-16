import { useTracker } from "../context/TrackerContext";

const TransactionList = () => {
  const {
    transaction,
    setTransaction,
    setIncome,
    setExpense,
    income,
    expense,
  } = useTracker();

  return (
    <div className="transactionList">
      <h2>History</h2>
      <hr />
      <ul>
        {transaction.map((transactions) => (
          <li
            key={transactions.id}
            className={transactions.amount > 0 ? "income_item" : "expense_item"}
          >
            <div>{transactions.title} </div>
            <div>
              <span>
                {transactions.amount > 0 ? "" : "-"}$
                {Math.abs(transactions.amount)}
              </span>
              <button
                className="btn-delete"
                onClick={() => {
                  setTransaction(
                    transaction.filter((x) => x.id !== transactions.id)
                  );
                  setIncome(income.filter((x) => x !== transactions.amount));
                  setExpense(expense.filter((x) => -x !== transactions.amount));

                  return;
                }}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
