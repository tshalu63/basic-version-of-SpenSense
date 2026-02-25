import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";
import InsightsDashboard from "../components/InsightsDashboard";
import StoryMode from "../components/StoryMode";
import ReflectionPanel from "../components/ReflectionPanel";

const Dashboard = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>SpendSense 💸</h1>
      <p style={{ color: "#555" }}>
        Know where your money goes — and why.
      </p>

      <AddExpense />

      <InsightsDashboard />

      <StoryMode />

      <ExpenseList />

      <ReflectionPanel />
    </div>
  );
};

export default Dashboard;