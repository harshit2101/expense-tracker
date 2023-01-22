import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="bg-[#fff] shadow-sm shadow-black px-10 py-5 flex justify-between mb-10">
      
        <div className="w-full border-r-2 text-center">
          <h4>Income</h4>
          <p className="text-3xl my-1 font-bold text-[#2ecc71]">Rs. {income}</p>
        </div>
        <div className="w-full text-center ">
          <h4>Expense</h4>
          <p className="text-3xl my-1 font-bold text-[#c0392b]">
            Rs. {expense}
          </p>
        </div>
      
    </div>
  );
};

export default IncomeExpenses;
