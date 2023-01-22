import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {

    const {transactions}=useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className='mb-5'>
        <div className='text-sm'>My Balance</div>
        <div className='text-5xl font-bold'>Rs. {total}</div>
    </div>
  )
}

export default Balance