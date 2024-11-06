import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import useExpenses from './hooks/useExpenses';
const App = () => {
 const { expenses, loading, error, handleAddExpense } = useExpenses();
 return (
 <div>
 <h1>Expense Tracker</h1>
 <ExpenseForm onAddExpense={handleAddExpense} />
 <ExpenseList expenses={expenses} loading={loading} error={error} />
 </div>
 );
};
export default App;
