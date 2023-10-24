"use client";
import PageButton from "@/app/(components)/pageButton";
import PostCard from "@/app/(components)/postCard";
import { posts } from "@/app/(data)/mock";
import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  let id = Number(pathname.slice(7));
  if (id > posts.length) {
    return (
      <h1 className="text-center text-xl">
        This page has not been created yet!
      </h1>
    );
  } else {
    return (
      <div className="flex justify-normal">
        <PageButton
          label={"Home"}
          onClick={() => {
            router.push("/");
          }}
        ></PageButton>
        <PostCard
          title={posts[id - 1].title}
          author={posts[id - 1].author}
          description={posts[id - 1].description}
        ></PostCard>
      </div>
    );
  }
}
