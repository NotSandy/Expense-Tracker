import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react/cjs/react.development'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const addExpenseButton = <button onClick={startEditingHandler}>Add New Expense</button>

    return (
        <div className='new-expense'>
            {!isEditing ? addExpenseButton : <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense
