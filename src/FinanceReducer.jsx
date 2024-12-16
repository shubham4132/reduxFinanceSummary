const initialState = { income: 0, expenses: 0 };
const FinanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "income/added":
      return { ...state, income: state.income + action.payload };
    case "expenses/added":
      return { ...state, expenses: state.expenses + action.payload };
    default:
      return state;
  }
};
export default FinanceReducer;
