import './ExpenseItem.css';
import React, {useState} from 'react'; // React hook
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem =(props)=> {
  const [title, setTitle] = useState(props.title);

  const clickHandler=()=>{
    setTitle('Updated');
  }
  
  return (
    <Card className ="expense-item">
      <ExpenseDate date ={props.date} />
      <div className ="expense-item__description">
        <h2>{title}</h2>
        <h2 className="expense-item__price">R{props.amount}</h2>
      </div>
      <button onClick = {clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
