import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { detectCategory } from "../utils/categoryDetector";

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext);

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const category = detectCategory(note);

    addExpense({
      id: Date.now(),
      amount: Number(amount),
      note,
      category,
      date: new Date().toISOString(),
    });

    setAmount("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Note (eg: Zomato order)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddExpense;