// Calculate regret score for a single expense
export const calculateRegretScore = (expense) => {
  let score = 0;

  const impulseCategories = ["Food", "Shopping", "Entertainment"];

  if (impulseCategories.includes(expense.category)) {
    score += 40;
  }

  if (expense.amount > 1000) {
    score += 30;
  }

  const hour = new Date(expense.date).getHours();
  if (hour >= 21 || hour <= 5) {
    score += 20;
  }

  return Math.min(score, 100);
};

// Monthly average regret
export const monthlyRegret = (expenses) => {
  if (expenses.length === 0) return 0;

  const total = expenses.reduce(
    (sum, e) => sum + calculateRegretScore(e),
    0
  );

  return Math.round(total / expenses.length);
};