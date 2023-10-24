type cardData = { title: string; description: string; author: string};
export default function PostCard({ title, description, author}: cardData) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[1000px] min-h-[200px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[50px]  hover:from-green-500 hover:to-pink-500 overflow-y-auto">
        <h1 className="text-center font-black text-[40px] mt-4">{title}</h1>
        <strong>
          <p className="pl-12 pr-12 text-[20px] text-left font-sans">
            <strong className="text-[25px]">Description:</strong> {description}
          </p>
          <p className="pl-12 pr-12 text-right mb-12">Author: {author}</p>
        </strong>
      </div>
    </div>
  );
}
