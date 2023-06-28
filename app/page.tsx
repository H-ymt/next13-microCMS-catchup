import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>microCMS</h1>
      <Link href="/static">ブログページ</Link>
    </main>
  );
}
