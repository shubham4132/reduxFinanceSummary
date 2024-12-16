import { useSelector } from "react-redux";

export default function FinanceSummary() {
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  return (
    <>
      <h1>FinanceSummary</h1>
      <p>Income:${income}</p>
      <p>Expense:${expenses}</p>
      <p>Balance:${income - expenses}</p>
    </>
  );
}
