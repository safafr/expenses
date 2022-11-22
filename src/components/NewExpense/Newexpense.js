import React,{useState} from 'react';
import NewExpenseFrorm from './NewExpenseFrorm';
import './Newexpense.css'

function Newexpense(props) {
  const [IsOpen,setIsOpen]=useState(false)
  const openFoldHandler=()=>setIsOpen(!IsOpen)
  const getNewExpenseData=(data) => {
    const NewExpense={
      ...data,
      id:Math.random().toString(),
    } 
  

  props.onSaveNewExpense(NewExpense)
  }
  return (
    
    <div className="new-expense">
          {IsOpen && <NewExpenseFrorm onGetNewExpenseData={getNewExpenseData} close={openFoldHandler}/>}
          {!IsOpen && <button onClick={openFoldHandler}>Add New Expense </button>}
          {/* //get... pointeur 3al valeur */}
        </div>
 
 )
  
}



export default Newexpense
