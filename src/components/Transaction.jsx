import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      className={
        transaction.amount < 0
          ? "border-r-red-600 border-r-4 shadow-sm rounded-sm shadow-black py-2 my-2 relative flex justify-between bg-red-200"
          : "border-r-green-600 border-r-4 shadow-sm rounded-sm shadow-black py-2 my-2 relative flex justify-between bg-green-200"
      }
    >
      <div className="ml-2 capitalize">{transaction.text} </div>
      <div className={`mr-2 font-bold ${transaction.amount<0? "text-red-600":"text-green-600"}`}>
        {sign}Rs.
        {` ${Math.abs(transaction.amount)}`}
      </div>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="cursor-pointer bg-gray-800/90 border-0 text-white text-lg px-4 py-1 absolute top-[5%] left-[113%] sm:left-[107%] -translate-x-full transition-opacity duration-100 ease-in"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
