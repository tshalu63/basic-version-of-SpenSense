import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { monthlyRegret } from "../utils/regretScore";
import { predictNextMonth } from "../utils/prediction";

const InsightsDashboard = () => {
  const { expenses } = useContext(ExpenseContext);

  const regret = expenses.length ? monthlyRegret(expenses) : 0;
  const prediction = expenses.length ? predictNextMonth(expenses) : 0;

  return (
    <div>
      <h3>Insights</h3>
      <p>😬 Regret Score: {regret}%</p>
      <p>🔮 Predicted Next Month Spend: ₹{prediction}</p>
    </div>
  );
};

export default InsightsDashboard;