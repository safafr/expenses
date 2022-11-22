import React from 'react'
import ExpenseItem from "./ExpenceItem"
import "./expenselist.css"
function expenselist(props) {
    if(props.expenses.length === 0 ){
        return <h2 className='no-expenses'>No expenses Found ! </h2>
    }
  return (
    <ul class ="expenses-list">{
        props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          price={expense.price}
          title={expense.title}
        />
       ))}
       </ul>
  )
}

export default expenselist