"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  todo: z
    .string()
    .min(1, { message: "Todo is required" })
    .max(10, { message: "Todo must be less than 10 characters" }),
});
const todos = [
  { id: 1, text: "Learn Next.js" },
  { id: 2, text: "Build a project" },
  { id: 3, text: "Deploy the project" },
];

export async function getTodos() {
  return { data: todos };
}

export async function addTodo(
  prevState: { message: string },
  formData: FormData,
  str?: string
) {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    // 获取第一个错误信息
    const firstError = parsed.error.errors[0]?.message || "Invalid input";
    return { ...prevState, message: firstError };
  }
  const todo = parsed.data.todo;
  // Object.fromEntries 可以把所有form表单的值获取到
  todos.push({ id: todos.length + 1, text: todo });
  revalidatePath("/todolist2");
  return { ...prevState, message: `add ${todo} success` };
}
