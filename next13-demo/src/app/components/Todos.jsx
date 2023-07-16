async function getTodo() {
  const res = await fetch(`http://localhost:3001/api/todos`);
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 3000)
  );
  const todos = await res.json();
  return todos;
}

export default async function Todos() {
  const todos = await getTodo();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
