import './App.css';
import BudgetCard from './components/BudgetCard'

function App() {
  return (
    <div>
      <header className='flex justify-between'>
        <h1 className='text-3xl ml-4 mt-6 font-medium'>Budgets</h1>
        <div className='mr-4 mt-5 flex space-x-2'>
          <button className='bg-blue-500 border-solid border-2 border-blue-500 rounded-md text-white px-2'>Add Budget</button>
          <button className='border-solid border-2 rounded-md p-2'>Add Expense</button>
        </div>

      </header>
      <div>
        <BudgetCard name='Entertainment' amount='200' max='1000'></BudgetCard>
      </div>
    </div>
    
  );
}

export default App;
