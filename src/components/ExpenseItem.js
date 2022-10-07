import './ExpenseItem.css'
function ExpenseItem(props){
    const month= props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    return(
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className='expense-item_description'>{props.title}</div>
            <div className='expense-item_price'>${props.amount}</div>
        </div>
    );
}
export default ExpenseItem