import { useMemo } from "react";
import { monthlyRegret } from "../utils/regretScore";
import { predictNextMonth } from "../utils/prediction";

const useExpenseAnalytics = (expenses) => {
  return useMemo(() => {
    if (!expenses || expenses.length === 0) {
      return {
        total: 0,
        regret: 0,
        prediction: 0,
        foodSpent: 0,
      };
    }

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    const regret = monthlyRegret(expenses);

    const prediction = predictNextMonth(expenses);

    const foodSpent = expenses
      .filter((e) => e.category === "Food")
      .reduce((sum, e) => sum + e.amount, 0);

    return {
      total,
      regret,
      prediction,
      foodSpent,
    };
  }, [expenses]);
};

export default useExpenseAnalytics;