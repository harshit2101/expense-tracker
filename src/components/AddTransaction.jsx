import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const uniqueId = uuidv4();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uniqueId,
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount("");
    setText("");
  };

  return (
    <div>
      <h3 className="mb-2 border-b-2 border-gray-300">Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col">
          <label htmlFor="text">Text</label>
          <input
            className="border-2 py-1 px-2 rounded-md border-blue-400 capitalize"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="amount">
            Amount <span className="text-sm">(negative -</span>
            <span className="text-sm text-red-600"> expense</span>
            <span className="text-sm">, positive -</span>
            <span className="text-sm text-green-700"> income</span>
            <span className="text-sm">)</span>
          </label>
          <input
            className="border-2 py-1 px-2 rounded-md border-blue-400"
            type="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="bg-blue-700 w-full mt-3 rounded-md py-2 hover:scale-105 text-[#eaeaea]">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
