import "../styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ months, expenseData }) => {
  return (
    <div className="expense-item">
      <ExpenseDate months={months} expenseData={expenseData} />
      <div className="expense-item__description">
        <h2>{expenseData.item}</h2>
      </div>
      <div className="expense-item__price">₹ {expenseData.price}</div>
    </div>
  );
};
export default ExpenseItem;
