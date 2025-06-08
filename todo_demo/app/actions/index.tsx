"use server"
import { redirect } from "next/navigation"
import { db } from "../db"
import { revalidatePath } from "next/cache"

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: {
      id,
    },
  })
  // revalidatePath 使用可以避免打包后运行的缓存
  revalidatePath("/")
  redirect("/")
}

export const updateSnippet = async (id: number, data: { title: string, code: string }) => {
  await db.snippet.update({
    where: {
      id,
    },
    data,
  })
  revalidatePath("/")
  redirect("/")
}