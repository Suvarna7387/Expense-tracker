import React from "react";
import '../styles/ExpenseFilter.css'

const ExpenseFilter = (props) => {

    return(
        <div className="Expenses-filter">
            <div className="Expense-filter__control">
                <label>Filter by Year</label>
                <select onChange={(e) => props.updatefilteryear(e.target.value)} value = {props.filteredyear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
};

export default ExpenseFilter;