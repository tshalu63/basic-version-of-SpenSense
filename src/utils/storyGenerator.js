export const generateStory = (expenses) => {
  if (expenses.length === 0) return "";

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const foodSpent = expenses
    .filter((e) => e.category === "Food")
    .reduce((sum, e) => sum + e.amount, 0);

  if (foodSpent > total * 0.4) {
    return `This month you spent a large portion of your money on food (₹${foodSpent}).
Late-night or frequent food orders seem to be a major reason for higher expenses.`;
  }

  return `Your spending this month was mostly balanced.
With small optimizations, you can save more next month.`;
};