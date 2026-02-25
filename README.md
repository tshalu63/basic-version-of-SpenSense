📂 1️⃣ Folder Structure

src/
│
├── components/
│   ├── AddExpense.jsx
│   ├── ExpenseList.jsx
│   ├── ExpenseCard.jsx
│   ├── InsightsDashboard.jsx
│   ├── StoryMode.jsx
│   ├── ReflectionPanel.jsx
│
├── context/
│   └── ExpenseContext.jsx
│
├── hooks/
│   └── useExpenseAnalytics.js
│
├── utils/
│   ├── categoryDetector.js
│   ├── regretScore.js
│   ├── prediction.js
│   ├── dateUtils.js
│
├── pages/
│   └── Dashboard.jsx
│
├── styles/
│   └── main.css
│
├── App.jsx
└── index.js

🎨 4️⃣ UI Wireframe Ideas (Simple but Premium)

🏠 Dashboard Layout

--------------------------------
|  SpendSense 💸               |
|  "Know where your money goes"|
--------------------------------
| ₹12,450  | Regret: 42% 😬    |
| This Month Spending          |
--------------------------------
| 📊 Category Chart            |
--------------------------------
| 📖 Story Mode Insight        |
--------------------------------


➕ Add Expense Screen

Amount:   [ ₹ ____ ]
Note:     [ Zomato order ]
Category: [ Auto-detected 🍔 ]
Mood:     🙂 😐 😞
[ Add Expense ]

😬 Regret Score Visual

Regret Meter
[███████-----] 42%
"Mostly impulsive expenses"
