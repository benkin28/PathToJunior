import Image from "next/image";
import { authors } from "./(data)/mock";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center gap-1">
      <ul>
        <li>
          <h1 className="font-bold text-[60px]">Authors:</h1>
        </li>
        {authors.map((author) => (
          <Link key={author.id} href={`./${author.id}#90`}>
            <div>
              <li key={author.id}>
                <p
                  key={author.id}
                  className="font-serif font-bold text-[30px] italic"
                >
                  {author.name}
                </p>
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
