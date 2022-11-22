import React , { useState,useRef } from 'react';

import './NewExpenseForm.css';

function NewExpenseFrorm(props) {
    const [entredTitle,setEntredTitle]=useState("");
    const [entredPrice,setEntredPrice]=useState("");
    const [entredDate,setEntredDate]=useState("");
    const titleRef = useRef()
//const [UserInput, setUserInput] = useState({EntredTitle :"",EntredPrice:"",EntredDate:""});
    const titleChangeHandler = (event) =>{
        setEntredTitle(event.target.value)
        //setUserInput({...UserInput,entredTitle:event.target.value})

      /*setUserInput((prevState)=>{
        return{...prevState,EntredTitle:event.target.value}
      })*/
};
const dateChangeHandler = (event) =>{
    setEntredDate(event.target.value)
    //setUserInput({...UserInput,entredDate:event.target.value})
    /*setUserInput((prevState)=>{
        return{...prevState,EntredDate:event.target.value}
    })*/
};
const PriceChangeHandler = (event) =>{
    setEntredPrice(event.target.value)
    //setUserInput({...UserInput,entredPrice:event.target.value})
    /*setUserInput((prevState)=>{
        return{...prevState,EntredPrice:event.target.value}
    })*/
};
    const submitHanddler=(event) =>{
        //methode prédefini f java .......
        event.preventDefault();
        const expenseData={
            price:entredPrice,
            title:entredTitle,
            date:new Date(entredDate),

        };
     props.onGetNewExpenseData(expenseData);
        setEntredDate("")
        setEntredPrice("")
        setEntredTitle("")

    };
    const closeClick=()=>{
        props.close()
    }
  return (
    <form onSubmit={submitHanddler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" placeholder="title" 
                // onChange={titleChangeHandler}
                // value={entredTitle}
                
                />
          
            </div>
            
            <div className='new-expense__control'>
                <label>Price</label>
                <input type="number" min="0" placeholder="price" onChange={PriceChangeHandler} value={entredPrice}/>
                
            </div>
            
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} value={entredDate}/>
                
            </div>
            
        </div>
        <div className='new-expense__actions'>

            <button type="submit" >Add Expense</button>
            
            <button type="submit" onClick={closeClick}>Cancel</button>

        </div>
        
    </form>

  )
}

export default NewExpenseFrorm
