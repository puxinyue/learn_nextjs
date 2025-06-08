import { NextRequest, NextResponse } from "next/server";

const todos = [
  { id: 1, text: "Learn Next.js" },
  { id: 2, text: "Build a project" },
  { id: 3, text: "Deploy the project" },
];

export async function GET(request: NextRequest) {
  return NextResponse.json({ data: todos });
}

export async function POST(request: NextRequest) {
  const { todo } = await request.json();
  todos.push({ id: todos.length + 1, text: todo });
  return NextResponse.json({ data: todos });
}
