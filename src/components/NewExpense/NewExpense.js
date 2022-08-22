import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random.toString() };
    props.onAddExpense(expenseData);
    showFilterHandler();
  };

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  let newExpenseContent = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelFilter={showFilterHandler}
    />
  );

  if (showFilter === false) {
    newExpenseContent = (
      <button className="new-expense__actions" onClick={showFilterHandler}>
        Add New Expense
      </button>
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
