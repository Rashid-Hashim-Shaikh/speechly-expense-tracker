import { useContext } from "react";


import { ExpenseTrackerContext } from './context/context'
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories'

const useTransactions = (title) => {
    resetCategories();
    // brings all the trnsactions entered
    const { transactions } = useContext(ExpenseTrackerContext);

    // filter out the transactions as per their type (income or expense)
    const transactionsPerType = transactions.filter((t) => t.type === title);

    // calculate the total amount of the filtered array  
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);

    //selecting the categories depending on type to get the object of categories(income or expense) from constant folder
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    // looping through each transaction of filtered array
    transactionsPerType.forEach((t) => {

        // finding the categories in the categories array and checking it with the filtered transactions
        const category = categories.find((c) => c.type === t.category);

        // if category exist increment the amount with the transaction amount
        if (category) category.amount += t.amount;
    });

    // new array which have the amount greater than 0
    const fillteredCategories = categories.filter((c) => c.amount > 0);

    // boilerplate for chart data
    const chartData = {
        datasets: [{
            data: fillteredCategories.map((c) => c.amount),
            backgroundColor: fillteredCategories.map((c) => c.color)
        }],
        labels: fillteredCategories.map((c) => c.type)
    }

    return { total, chartData }
}

export default useTransactions;