import Image from "next/image";
import Link  from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
          <span className="text-5xl">Hello World</span>
          <Link href={'/about'}>Go to About</Link>
    </main>
  );
}
