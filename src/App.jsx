import { Provider } from "react-redux";
import store from "./store";
import IncomeExpenseForm from "./components/IncomeExpenseForm";
import FinanceSummary from "./components/FinanceSummary";

export default function App() {
  return (
    <Provider store={store}>
      <>
        <IncomeExpenseForm />
        <FinanceSummary />
      </>
    </Provider>
  );
}
