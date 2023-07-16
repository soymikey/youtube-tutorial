"use client";

import { useState } from "react";

export default function Search({ getPostResult }) {
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${query}/posts`
    );
    const posts = await res.json();
    getPostResult(posts);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search posts by UserId..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
