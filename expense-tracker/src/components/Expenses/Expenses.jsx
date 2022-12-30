import { useState } from 'react';
import "../styles/Expenses.css";
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = ( {expenseData} ) => {

    const [filteredyear, setFilteredyear] = useState("2021");

    const updatefilteryear = (year) => {
       setFilteredyear(year);
    }

    let filteredRecords = expenseData.filter((exp) => {
        return exp.date.getFullYear().toString() === filteredyear.toString();
    });

    
    return (
        <div className='expenses'>
            <ExpenseFilter updatefilteryear = {updatefilteryear} filteredyear = {filteredyear}/>
            <ExpenseChart  filteredRecords ={filteredRecords}/>
            <ExpensesList  filteredRecords ={filteredRecords}/>
        </div>
    )
}
export default Expenses;