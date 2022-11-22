import React,{useState} from 'react';
import ExpenceDate from './ExpenseDate';
import "./ExpenseItem.css";
import Card from '../UI/Card';


function ExpenceItem(props) {
  const [title,setTitle]=useState(props.title)
  //mannajamech nesta3mel el props direct 
  //State hiya 3ibara variable ama ya3mel rerender lel composant nesta3mlo useState
  //nsamiyouha react hook
  //sytaxe pour changer 
   const clickHandler=()=>{
    setTitle('New Title');
    console.log(title);
   };
   //fonction clickHandler bech tbaddel title 5thet title el 9im w tbaddel
    
    
  return (
    <Card className='expense-item'>

      <ExpenceDate date={props.date}/>
        <div className='expense-item__description'> {/*child de composants */}
            <h2>{title}</h2>
        </div>
{/*ajoutina el fonction lenna  */}
        <button onClick={clickHandler}>
          Update Title
        </button>
        <div className='expense-item__price'>
          {props.price} $
        </div>
      
    </Card>
  )
}

export default ExpenceItem
