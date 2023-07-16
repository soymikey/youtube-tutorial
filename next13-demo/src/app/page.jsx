import { Suspense } from "react";
import Comments from "./components/Comments";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <main>
      <div>nextjs 13 demo</div>
      <div style={{ display: "flex" }}>
        <div>
          <h1>CommentList</h1>
          <Suspense fallback={<div>Loading commnets</div>}>
            <Comments />
          </Suspense>
        </div>
        <div>
          <h1>TodosList</h1>
          <Suspense fallback={<div>Loading Todos</div>}>
            <Todos />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
