function Line({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-8 font-zain">
      <hr className="flex-1 border-t-2 border-transparent bg-linear-to-l from-blue-500 to-transparent h-0.5" />
      <span className="text-white  font-medium px-4 py-1 bg-blue-500 rounded-full text-xl">
        {text}
      </span>
      <hr className="flex-1 border-t-2 border-transparent bg-linear-to-r from-blue-500 to-transparent h-0.5" />
    </div>
  );
}

export default Line;
