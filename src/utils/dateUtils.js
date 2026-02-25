export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const isLateNight = (date) => {
  const hour = new Date(date).getHours();
  return hour >= 21 || hour <= 5;
};