import { posts } from "../(data)/mock";
import Link from "next/link";
export default function Page() {
  return (
    <div className="mt-24 w-screen h-screen">
      <div className="grid justify-center">
        <ul>
          <li>
            <strong>
              <h2 className="text-[40px] mb-12">Articles:</h2>
            </strong>
          </li>
          {posts.map((element) => (
            <li key={element.id} className="text-[30px] mb-12">
              <Link href={`./posts/${element.id}`}>{element.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
