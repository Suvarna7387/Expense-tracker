import React from 'react';
import "../styles/ExpenseDate.css";

const ExpenseDate = (props) => {
    const month = props.expenseData.date.toLocaleString("default", { month: "long" });
    const year = props.expenseData.date.getFullYear();
    const date = props.expenseData.date.getDate();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-data__day'>{date}</div>
        </div>
    );
}
export default ExpenseDate;