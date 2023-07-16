import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return NextResponse.json(post);
}
