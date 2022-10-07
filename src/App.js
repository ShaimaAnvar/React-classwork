import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  let expense = [
    {
      id:'e1',
      title:'school fee',
      amount:200,
      date: new Date(2022,8,10)
    },
    {
      id:'e2',
      title:'bus fee',
      amount:700,
      date: new Date(2022,10,10)
    },
    {
      id:'e3',
      title:'rent',
      amount:1000,
      date: new Date(2022,12,10)
    }
  ]
  return (
    <div>
      <ExpenseItem
      date={expense[0].date} 
      title={expense[0].title} 
      amount={expense[0].amount}>
      </ExpenseItem>
      <ExpenseItem date={expense[1].date} 
      title={expense[1].title} 
      amount={expense[1].amount}></ExpenseItem>
      <ExpenseItem date={expense[2].date} 
      title={expense[2].title} 
      amount={expense[2].amount}></ExpenseItem>
    </div>
  );
}

export default App;
