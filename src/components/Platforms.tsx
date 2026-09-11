import Image from "next/image";
import Link from "next/link";

const platforms = [
  {
    href: "tel:09029555426",
    img: "/images/phone.png",
    alt: "تماس تلفنی",
    label: "تماس",
    ring: "hover:border-green-400/60",
    glow: "group-hover:bg-green-400/20",
    shadow: "shadow-green-400/30",
  },
  {
    href: "https://web.eitaa.com/#@ghalaaamm",
    img: "/images/eita.png",
    alt: "ایتا",
    label: "ایتا",
    ring: "hover:border-orange-400/60",
    glow: "group-hover:bg-orange-400/20",
    shadow: "shadow-orange-400/30",
  },
  {
    href: "https://web.telegram.org/k/#@ghalaaamm",
    img: "/images/telegram.png",
    alt: "تلگرام",
    label: "تلگرام",
    ring: "hover:border-sky-400/60",
    glow: "group-hover:bg-sky-400/20",
    shadow: "shadow-sky-400/30",
  },
];

function Platforms() {
  return (
    <div
      className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto my-8
      flex justify-center items-center gap-4 sm:gap-6 flex-wrap
      p-4 sm:p-5 rounded-2xl
      bg-primary/95 backdrop-blur-md
      border border-white/10
      shadow-xl shadow-sky-900/30"
    >
      {platforms.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`group relative flex items-center justify-center
          size-12 sm:size-14 rounded-2xl
          bg-white/10 backdrop-blur-sm
          border border-white/15
          ${item.ring}
          hover:-translate-y-1.5 hover:bg-white/20
          transition-all duration-300
          shadow-lg ${item.shadow}`}
        >
          {/* هاله نورانی hover */}
          <div
            className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${item.glow} group-hover:opacity-100`}
          />

          <Image
            src={item.img}
            alt={item.alt}
            width={950}
            height={250}
            className="relative w-7 sm:w-8 h-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
}

export default Platforms;
