import { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


function App() {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [expenseData, setExpenseData] = useState([])
  
  const getNewExpenseRecord = (data) =>{
    setExpenseData([data, ...expenseData]);
}
  return (
    <div className="App">
      <NewExpense ReadExpenseRecord = {getNewExpenseRecord}/>
      <Expenses expenseData = {expenseData} months = {months} />
    </div>
  );
}

export default App;