import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
function ExpenseItem(props){
   
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item_description'>{props.title}</div>
            <div className='expense-item_price'>${props.amount}</div>
        </Card>
    );
}
export default ExpenseItem