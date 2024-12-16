import { useState } from "react";
import { useDispatch } from "react-redux";

export default function IncomeExpenseForm() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const handleAddIncome = () => {
    dispatch({ type: "income/added", payload: parseFloat(amount) });
  };
  const handleAddExpense = () => {
    dispatch({ type: "expenses/added", payload: parseFloat(amount) });
  };
  return (
    <>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </>
  );
}
