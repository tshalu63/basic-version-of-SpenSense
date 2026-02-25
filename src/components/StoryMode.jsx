import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { generateStory } from "../utils/storyGenerator";

const StoryMode = () => {
  const { expenses } = useContext(ExpenseContext);

  if (expenses.length === 0) return null;

  return (
    <div>
      <h3>📖 Story Mode</h3>
      <p>{generateStory(expenses)}</p>
    </div>
  );
};

export default StoryMode;