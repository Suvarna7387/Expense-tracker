import React, { useState } from "react";
import "../styles/NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const getNewExpenseData = (data) =>{
        props.ReadExpenseRecord(data);
    }

    const setShowExpenseFormHandler = () => {
        setShowExpenseForm(true);
    }

    return(
        <div className="new-expense">
            

        {
            !showExpenseForm && <button onClick={setShowExpenseFormHandler}>Add New Expense</button>
        }
 
        {
            showExpenseForm && <ExpenseForm sendData={getNewExpenseData} setShowExpenseForm = {setShowExpenseForm} />
        } 
        </div>
    );
}

export default NewExpense;