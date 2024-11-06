import React from 'react';
const ExpenseList = ({ expenses, loading, error }) => {
 if (loading) return <p>Loading expenses...</p>;
 if (error) return <p>{error}</p>;
 return (
 <ul>
 {expenses.map((expense) => (
 <li key={expense._id}>
 {new Date(expense.date).toLocaleDateString()} - {expense.category}:
${expense.amount} ({expense.description})
 </li>
 ))}
 </ul>
 );
};
export default ExpenseList;
