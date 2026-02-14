import Image from "next/image";
import Link from "next/link";


function Platforms() {
  return (
    <div className="w-1/3  flex justify-center items-center p-4 rounded-xl  shadow-lg shadow-blue-400/30 m-auto gap-5">
      <Link
        href="https://web.telegram.org/k/#@ghalaaamm"
        className="size-10 shadow-xl shadow-green-400/30  bg-transparent hover:-translate-y-1 rounded-xl flex items-center justify-center  text-white font-bold my-hover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/phone.png"
          alt="logo eitaa"
          width={950}
          height={250}
          className="w-10"
        />
      </Link>
      <Link
        href="https://web.eitaa.com/#57678921"
        className="size-10  shadow-xl shadow-orange-400/40 hover:-translate-y-1  bg-transparent rounded-xl flex items-center justify-center gap-2  font-bold my-hover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/eita.png"
          alt="logo eitaa"
          width={950}
          height={250}
          className="w-10"
        />
      </Link>
      <Link
        href="https://web.telegram.org/k/#@ghalaaamm"
        className="size-10  shadow-xl shadow-blue-400/40 bg-transparent rounded-xl hover:-translate-y-1 flex items-center justify-center  text-white font-bold my-hover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/telegram.png"
          alt="telegram icon"
          width={800}
          height={500}
        />
      </Link>
    </div>
  );
}

export default Platforms;
