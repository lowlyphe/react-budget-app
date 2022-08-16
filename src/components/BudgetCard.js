import { currencyFormatter, getProgressBarVarient, getRatio, overload } from "../utils"


export default function BudgetCard({ name, amount, max }) {    
    
    const progressStyle = {
        width: getRatio(amount, max),
        backgroundColor: getProgressBarVarient(amount, max)
    }

    const divStyle = {
        backgroundColor: overload(amount, max)
    }


  return (
    <div className="flex flex-col mx-4 my-4 border border-solid border-gray-500 rounded-md p-2 space-y-4" style={divStyle}>
        <div className="flex justify-between align-baseline ">
            <div className="flex items-baseline">{name}</div>
            <div>{currencyFormatter.format(amount)} / <span className="text-gray-500 text-xs">{currencyFormatter.format(max)}</span></div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3.5">
            <div className="h-3.5 rounded-full" style={progressStyle}></div>
        </div>
        <div className="flex justify-end space-x-2">
            <button className="border border-solid border-blue-400 text-blue-400 rounded-md p-2 font-medium">Add Expense</button>
            <button className="border border-solid border-gray-500 text-gray-500 rounded-md p-2 font-medium">View Expenses</button>
        </div>
    </div>
  )


}





