import Image from "next/image";
import PageButton from "./(components)/pageButton";
import PostCard from "./(components)/postCard";
import { posts, authors } from "./(data)/mock";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white grid justify-center items-center h-screen">
      <div>
        <h1 className="text-[60px] font-sans mt-12">This is my posts page</h1>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Link href={"./posts"} className="text-[30px] mb-12">
            <strong>
              <h2 className="text-[40px] mb-12">Articles</h2>
            </strong>
          </Link>
        </div>
        <div>
          <Link href={"./authors"} className="text-[30px] mb-12">
            <strong>
              <h2 className="text-[40px] mb-12">Authors</h2>
            </strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
