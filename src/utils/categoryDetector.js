// Detect category based on keywords
export const detectCategory = (note) => {
  const text = note.toLowerCase();

  if (text.includes("zomato") || text.includes("swiggy") || text.includes("food")) {
    return "Food";
  }
  if (text.includes("uber") || text.includes("ola") || text.includes("bus")) {
    return "Travel";
  }
  if (text.includes("amazon") || text.includes("flipkart") || text.includes("shopping")) {
    return "Shopping";
  }
  if (text.includes("movie") || text.includes("netflix")) {
    return "Entertainment";
  }
  if (text.includes("rent") || text.includes("electricity")) {
    return "Bills";
  }

  return "Others";
};