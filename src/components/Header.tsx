import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full h-screen  flex items-center gap-5  font-zain">
      <Image
        src="/images/hero.png"
        alt="عکس هدر"
        width={1080}
        height={950}
        className="w-1/2"
        priority
      />
      <div className="1/2 text-center space-y-8">
        <h1 className="font-bold text-4xl text-sky-800">
          ⚡قلم | سریعتر از همیشه
        </h1>
        <p dir="rtl" className="text-gray-500 text-sm">
          🚗 خدمات خودرویی | 💰 خدمات مالیاتی | ⚖️ امور قضایی | 🏦 خدمات بانکی
        </p>
        <Link
          href="/#serveces"
          className="px-5 py-3 bg-blue-500 shadow-lg shadow-blue-500/50 ring-2 ring-sky-500/50 text-white font-vazirmatn rounded-xl font-semibold my-hover   text-lg hover:px-7 "
        >
          مشاهده همه خدمات{" "}
        </Link>
      </div>
    </header>
  );
}

export default Header;
