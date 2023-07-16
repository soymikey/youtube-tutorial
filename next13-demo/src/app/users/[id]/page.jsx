const getUserDetails = async (id) => {
  const res = await fetch(`http://localhost:3001/api/users/${id}`);
  const user = await res.json();
  return user;
};

export default async function UserDetailsPage({ params: { id } }) {
  const { name, username, email, address, phone, website, company } =
    await getUserDetails(id);
  return (
    <main>
      <div>I am UserDetailsPage</div>
      <div>id:{id}</div>
      <div>name:{name}</div>
      <div>username:{username}</div>
      <div>email:{email}</div>
      <div>address:{`${address.street} ${address.city}`}</div>
      <div>phone:{phone}</div>
      <div>website:{website}</div>
      <div>company:{company.name}</div>
    </main>
  );
}
