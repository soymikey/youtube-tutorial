const getPostDetails = async (id) => {
  const res = await fetch(`http://localhost:3001/api/posts/${id}`);
  const post = await res.json();
  return post;
};

export default async function PostDetailsPage({ params: { id } }) {
  const post = await getPostDetails(id);
  return (
    <main>
      <div>I am PostDetailsPage</div>
      <div>post id:{post.id}</div>
      <div>post userId:{post.userId}</div>
      <div>title:{post.title}</div>
      <div>content:{post.body}</div>
    </main>
  );
}
