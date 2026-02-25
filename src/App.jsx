import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <NavLink to="/">Dashboard</NavLink> |{" "}
          <NavLink to="/reports">Reports</NavLink> |{" "}
          <NavLink to="/settings">Settings</NavLink>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;