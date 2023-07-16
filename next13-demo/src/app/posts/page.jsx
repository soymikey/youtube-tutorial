"use client";
import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import Search from "../components/Search";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await fetch("http://localhost:3001/api/posts");
      const posts = await res.json();
      setPosts(posts);
    }
    getPosts();
  }, []);

  return (
    <main>
      <div>I am posts page</div>
      <Search
        getPostResult={(posts) => {
          setPosts(posts);
        }}
      />
      <Posts posts={posts} />
    </main>
  );
}
