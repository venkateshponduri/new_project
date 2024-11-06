import { useState, useEffect } from 'react';
import { fetchExpenses, addExpense } from '../services/expenseService';
const useExpenses = () => {
 const [expenses, setExpenses] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 useEffect(() => {
 const loadExpenses = async () => {
 try {
 const data = await fetchExpenses();
 setExpenses(data);
 } catch (err) {
 setError('Failed to load expenses');
 } finally {
 setLoading(false);
 }
 };
 loadExpenses();
 }, []);
 const handleAddExpense = async (newExpense) => {
 try {
 const savedExpense = await addExpense(newExpense);
 setExpenses((prevExpenses) => [savedExpense, ...prevExpenses]);
 } catch (err) {
 setError('Failed to add expense');
 }
 };
 return { expenses, loading, error, handleAddExpense };
};
export default useExpenses;
