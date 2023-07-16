import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await res.json();
  return NextResponse.json(todos);
}
