import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");

  const comments = await res.json();
  return NextResponse.json(comments);
}
