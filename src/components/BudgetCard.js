import { currencyFormatter, getProgressBarVarient } from "../utils"


export default function BudgetCard({ name, amount, max }) {    
    
    const progressStyle = {
        width: `${(amount / max) * 100}%`,
        color: getProgressBarVarient(amount, max)
    }


  return (
    <div className="flex flex-col mx-4 my-4 border border-solid border-gray-500 rounded-md p-2 space-y-4">
        <div className="flex justify-between align-baseline ">
            <div className="flex items-baseline">{name}</div>
            <div>{currencyFormatter.format(amount)} / <span className="text-gray-500 text-xs">{currencyFormatter.format(max)}</span></div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3.5">
            <div className="h-3.5 rounded-full" style={progressStyle}></div>
        </div>
    </div>
  )


}





