import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 1000.0,
    date: new Date(2022, 0, 27),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 599.99,
    date: new Date(2022, 3, 30),
  },
  {
    id: "e3",
    title: "New Smartphone",
    amount: 2999.99,
    date: new Date(2022, 4, 1),
  },
  {
    id: "e4",
    title: "Food & Drinks",
    amount: 15.99,
    date: new Date(2022, 6, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
