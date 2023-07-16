async function getCommnets() {
  const res = await fetch(`http://localhost:3001/api/comments`);
  const comments = await res.json();
  return comments;
}

export default async function Comments() {
  const comments = await getCommnets();
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
}
