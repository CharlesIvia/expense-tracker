import React, { useContext } from "react";
import { GlobalContect } from "../context/GlobalState";

function TransactionList() {
  const { transactions } = useContext(GlobalContect);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
