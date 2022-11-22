import React , {useState}from 'react'
import ExpenceItem from './ExpenceItem'
import "./expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from "./expenselist";
import ExpensesChart from '../Chart/ExpensesChart';


function Expenses(props) {
   const [filtredYear, setFilterYear]=useState("2022");
   const filterChangeHandler = (selectedYear)=>{
    setFilterYear(selectedYear);
   };
   const filtredExpenses = props.expenses.filter((expense)=>{

    return expense.date.getFullYear().toString() === filtredYear;

   });

   let expensesContent = <h2>No Expenses found !!!</h2>;
   if(filtredExpenses.length > 0 ){
    expensesContent=filtredExpenses.map((expense)=>(
      <ExpenceItem
      key={expense.id}
      date={expense.date}
      price={expense.price}
      title={expense.title}></ExpenceItem>
    ))
   }
   
  return (
    <Card className='expenses'>
      <ExpensesFilter onChangefilter={filterChangeHandler}
      selected={filtredYear}/>
      <ExpensesChart dataChart ={ filtredExpenses}/>

      <ExpensesList expenses={filtredExpenses}/>

      {/* {expensesContent} */}
      {/* { filtredExpenses.length === 0 ?(
        <h2>No Expenses found !!!</h2>
      ): (
          filtredExpenses.map((expense)=>(
          <ExpenceItem
          key={expense.id}
          date={expense.date}
          price={expense.price}
          title={expense.title}></ExpenceItem>
        ))
      )} */}
    
    
    </Card>
  );
}

export default Expenses