import Link from "next/link";

export default async function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}> {user.name} </Link>
        </li>
      ))}
    </ul>
  );
}
