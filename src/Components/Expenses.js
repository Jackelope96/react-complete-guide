import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card'

function Expenses(props){

    return(
    <Card className="expenses">
        <ExpenseItem date = {props.expenseData[0].date} title = {props.expenseData[0].title} amount = {props.expenseData[0].amount}/>
        <ExpenseItem date = {props.expenseData[1].date} title = {props.expenseData[1].title} amount = {props.expenseData[1].amount}/>
        <ExpenseItem date = {props.expenseData[2].date} title = {props.expenseData[2].title} amount = {props.expenseData[2].amount}/>
        <ExpenseItem date = {props.expenseData[3].date} title = {props.expenseData[3].title} amount = {props.expenseData[3].amount}/>
    </Card>)
}
export default Expenses;