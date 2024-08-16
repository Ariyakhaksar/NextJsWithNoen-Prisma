"use server";

import { revalidatePath } from "next/cache";
import { createExpense } from "@/lib/expense";

export async function createExpenseAction(state: any, formData: FormData) {
   const data = Object.fromEntries(formData.entries());

   const title = data.title as string;
   if (typeof title !== "string") {
      throw Error("title most be a string");
   }

   const amount = parseFloat(data.amount as string);
   if (isNaN(amount)) {
      throw Error("Amount most be a nnumber");
   }

   await createExpense({ title, amount });
   revalidatePath("/");
}
