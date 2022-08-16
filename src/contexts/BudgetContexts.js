import React, { useContext } from "react";

const BudgetContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    };

    function addExpense({ description, amount, budgetId }) {
        setExpenses(prevExpenses => {
            
            return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
        })
    };

    function addBudget({ name, max }) {        
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidV4(), name, max}]
        })
    };

    function deleteBudget({ id }) {
        setBudgets(prevBudget => {
            return prevBudget.filter(budget => budget.id !== id)
        })
    };

    function deleteExpense() {
        setExpense(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    };

    return (<BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>{children}</BudgetsContext.Provider>)
}