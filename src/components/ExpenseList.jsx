import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h3>Expenses</h3>

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;