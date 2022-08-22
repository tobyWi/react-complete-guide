import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={changeFilterHandler}
        selected={filteredYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
