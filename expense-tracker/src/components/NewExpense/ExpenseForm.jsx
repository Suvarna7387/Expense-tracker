import React, { useState } from "react";
import "../styles/ExpenseForm.css";


const ExpenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();     
        const data = {
            date: new Date(date),
            item: title,
            price: amount,
        }
         props.sendData(data);

        setTitle("");
        setAmount("");
        setDate("");

        props.setShowExpenseForm(false);
    }

    return (
        <div >
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="task">Title</label>
                        <input type="text" id="task" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
                    </div>
                    <div className="new-expense__control">
                        <button type="submit" onClick={handleSubmit}>Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;