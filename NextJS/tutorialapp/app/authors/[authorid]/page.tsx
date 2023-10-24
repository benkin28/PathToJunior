"use client";
import PageButton from "@/app/(components)/pageButton";
import PostCard from "@/app/(components)/postCard";
import { posts } from "@/app/(data)/mock";
import { useRouter, usePathname } from "next/navigation";
import { authors } from "@/app/(data)/mock";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  let id = Number(pathname.slice(9));
  if (id > authors.length) {
    return (
      <h1 className="text-center text-xl">
        This page has not been created yet!
      </h1>
    );
  } else {
    const filteredPosts = posts.filter(
      (key) => key.author === authors[id].name
    );
    return (
      <div>
        <PageButton
          label={"Home"}
          onClick={() => {
            router.push("/");
          }}
        ></PageButton>
        <div className="mt-8 items-center flex w-screen justify-center">
          <ul>
            <li>
              <strong>
                <h2 className="text-[40px] mb-12">Articles:</h2>
              </strong>
            </li>
            {filteredPosts.map((element) => (
              <li key={element.id} className="text-[30px] mb-12">
                <Link href={`/posts/${element.id}`}>{element.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
