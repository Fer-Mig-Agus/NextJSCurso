'use-client'

interface Props {
  path: string;
  text: string;
}
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ path, text }: Props) => {
    const pathName=usePathname();
  return (
    <>
      <Link
      
      href={path}
      >
        {text}
      </Link>
    </>
  );
};

// hover:underline hover:text-blue-400 mr-2 transition-all

// text-blue-500
