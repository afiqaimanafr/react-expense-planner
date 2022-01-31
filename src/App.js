import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
    console.log('In App.js');
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
