type buttonText = { label: string; onClick: () => void };

export default function PageButton({ label, onClick }: buttonText) {
  return (
    <button
      className="bg-gradient-to-r from-cyan-500 to-purple-500 w-36 h-16
     font-bold text-xl rounded-2xl border-2 hover:from-green-500 hover:to-pink-500 focus:from-green-500 focus:to-pink-500"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
