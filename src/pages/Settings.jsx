import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Settings = () => {
  const { expenses } = useContext(ExpenseContext);

  const clearData = () => {
    if (window.confirm("Clear all expense data?")) {
      localStorage.removeItem("expenses");
      window.location.reload();
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>⚙️ Settings</h1>

      <p>Total Records: {expenses.length}</p>

      <button
        onClick={clearData}
        style={{ background: "red", color: "white", padding: "8px" }}
      >
        Clear All Data
      </button>

      <hr />

      <p style={{ fontSize: "14px", color: "#777" }}>
        Future options:
        <br />• Cloud Sync  
        <br />• Monthly Limits  
        <br />• Dark Mode  
      </p>
    </div>
  );
};

export default Settings;