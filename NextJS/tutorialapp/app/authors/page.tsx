import { authors } from "../(data)/mock";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-evenly">
      <div className="mt-4">
        <ul>
          <li>
            <strong>
              <h2 className="text-[40px] mb-12">Authors:</h2>
            </strong>
          </li>
          {authors.map((element) => (
            <li key={element.id} className="text-[30px] mb-12">
              <Link href={`./authors/${element.id}`}>{element.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
