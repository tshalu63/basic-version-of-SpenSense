import { createContext, useState, useEffect } from "react";

// 1️⃣ Create Context
export const ExpenseContext = createContext();

// 2️⃣ Provider Component
export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // 3️⃣ Save to LocalStorage (Offline First)
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // 4️⃣ Add Expense
  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};