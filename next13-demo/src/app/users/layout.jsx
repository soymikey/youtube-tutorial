export const metadata = {
  title: "Users Page",
  description: "This is for showing user list",
  keywords: "Javascript, React",
};

export default function UsersLayout({ children }) {
  return (
    <div>
      <h1>I am UsersLayout</h1>
      {children}
    </div>
  );
}
