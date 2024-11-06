import React, { useState } from 'react';
const ExpenseForm = ({ onAddExpense }) => {
 const [amount, setAmount] = useState('');
 const [category, setCategory] = useState('');
 const [description, setDescription] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault();
 onAddExpense({ amount, category, description });
 setAmount('');
 setCategory('');
 setDescription('');
 };
 return (
 <form onSubmit={handleSubmit}>
 <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
placeholder="Amount" required />
 <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}
placeholder="Category" required />
 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
placeholder="Description" />
 <button type="submit">Add Expense</button>
 </form>
 );
};
export default ExpenseForm;
