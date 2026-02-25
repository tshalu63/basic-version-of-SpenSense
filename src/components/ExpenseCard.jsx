const ExpenseCard = ({ expense }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "8px", margin: "6px 0" }}>
      <p><b>₹{expense.amount}</b></p>
      <p>{expense.note}</p>
      <p>Category: {expense.category}</p>
    </div>
  );
};

export default ExpenseCard;