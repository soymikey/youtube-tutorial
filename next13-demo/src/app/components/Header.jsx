import Link from "next/link";

export default function Header() {
  return (
    <main>
      <Link href={"/"}>Home</Link>--
      <Link href={"/users"}>Users</Link>--
      <Link href={"/posts"}>Posts</Link>
    </main>
  );
}
