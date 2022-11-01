import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        <li>
          <Link href="/blog/article1">Article1</Link>
        </li>
        <li>
          <Link href="/blog/article2?id=123">Article2</Link>
        </li>
      </ul>
    </>
  );
}
