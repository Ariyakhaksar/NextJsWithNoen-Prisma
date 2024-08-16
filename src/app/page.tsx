import Image from "next/image";
import { getExpenses } from "@/lib/expense";
import CreateExpenseForm from "@/components/CreateExpenseForm";

export default async function Home() {
   const expenses = await getExpenses();
   return (
      <section className="py-24">
         <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Expense Tracker</h1>
            <h2 className="text-zinc-500">Using Noen: Serverless Postgres</h2>

            <div className="mt-8 flex items-center justify-between gap-10">
               <div className="grow">
                  <h3 className="text-xl font-bold">Items</h3>
                  <ul className="mt-4 flex flex-col gap-1">
                     {expenses.map((expense) => (
                        <li key={expense.id} className="flex justify-between">
                           <span>{expense.title}</span>
                           <span>{expense.amount}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <CreateExpenseForm />
            </div>
         </div>
      </section>
   );
}
