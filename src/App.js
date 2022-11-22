import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/Newexpense";
import React, { useState } from "react";

const oldExpenses = [
  {
    id: "e1",
    date: new Date(2022, 10, 14),
    title: "New PC",
    price: 2500,
  },
  {
    id: "e2",
    date: new Date(2022, 5, 8),
    title: "Education",
    price: 6000,
  },
  {
    id: "e3",
    date: new Date(2020, 10, 22),
    title: "Voyage",
    price: 1999,
  },
  {
    id: "e4",
    date: new Date(2021, 3, 30),
    title: "Extra",
    price: 499,
  },
];
function App() {
  const [expenses, setExpenses] = useState(oldExpenses);
  const saveNewExpense = (newExpenseData) => {
    setExpenses((prevExpanses) => {
      return [newExpenseData, ...prevExpanses];
    });
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={saveNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;