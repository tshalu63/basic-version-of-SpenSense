export const predictNextMonth = (expenses) => {
  if (expenses.length === 0) return 0;

  const monthlyTotals = {};

  expenses.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    monthlyTotals[month] =
      (monthlyTotals[month] || 0) + expense.amount;
  });

  const totals = Object.values(monthlyTotals);
  const average =
    totals.reduce((a, b) => a + b, 0) / totals.length;

  return Math.round(average);
};