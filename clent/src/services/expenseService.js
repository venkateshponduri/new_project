const API_URL = '/api/expenses';
export const fetchExpenses = async () => {
 try {
 const response = await fetch(API_URL);
 return await response.json();
 } catch (error) {
 console.error('Error fetching expenses:', error);
 throw error;
 }
};
export const addExpense = async (expenseData) => {
 try {
 const response = await fetch(API_URL, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(expenseData),
 });
 return await response.json();
 } catch (error) {
 console.error('Error adding expense:', error);
 throw error;
 }
};
