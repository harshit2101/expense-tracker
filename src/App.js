import React from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="w-[400px] sm:w-[700px] mx-auto rounded-xl bg-blue-100 shadow-md shadow-black p-10 my-5">
      <div className="font-poppins  ">
        <GlobalProvider>
          <div className="text-center">
            <Header />
          </div>

          <div className="mt-10">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
