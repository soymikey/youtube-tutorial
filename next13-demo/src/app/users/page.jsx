import Users from "../components/Users";

const getUser = async () => {
  const res = await fetch("http://localhost:3001/api/users");
  const users = await res.json();
  return users;
};
export default async function UsersPage() {
  const users = await getUser();
  return (
    <main>
      <div>I am users page</div>
      <Users users={users} />
    </main>
  );
}
