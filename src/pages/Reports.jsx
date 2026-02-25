import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { monthlyRegret } from "../utils/regretScore";
import { predictNextMonth } from "../utils/prediction";

const Reports = () => {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const regret = monthlyRegret(expenses);
  const prediction = predictNextMonth(expenses);

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>📊 Reports</h1>

      <p><b>Total Spent:</b> ₹{total}</p>
      <p><b>Average Regret:</b> {regret}%</p>
      <p><b>Next Month Prediction:</b> ₹{prediction}</p>

      <hr />

      <h3>Insights</h3>
      <ul>
        <li>You can reduce impulsive spending by planning meals.</li>
        <li>Late-night expenses contribute heavily to regret score.</li>
        <li>Tracking daily improves awareness.</li>
      </ul>
    </div>
  );
};

export default Reports;