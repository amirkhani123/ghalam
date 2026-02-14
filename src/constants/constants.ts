import { Ifeatures, Iservices } from "@/interfaces/interfaces";
import { FaPrint, FaClock, FaHeadset } from "react-icons/fa";
const featuresConstant: Ifeatures[] = [
  {
    icon: FaClock,
    title: "۲۴ ساعته",
    desc: "حتی روزهای تعطیل در خدمتیم",
  },
  {
    icon: FaPrint,
    title: "چاپ  سیاه‌سفید",
    desc: "با بهترین کیفیت",
  },
  { icon: FaHeadset, title: "پشتیبانی فوری", desc: "از طریق تلگرام و ایتا" },
];
const servicesConstant: Iservices[] = [
  {
    img: "/images/etax.png",
    title: "امور مالیاتی ",
  },
  {
    img: "/images/police.png",
    title: "استعلام و پرداخت خلافی",
  },
  {
    img: "/images/car.png",
    title: "استعلام و پرداخت عوارض خودرو",
  },
  {
    img: "/images/wifi.png",
    title: "امور اینترنتی",
  },
  {
    img: "/images/home.png",
    title: "سامانه های دولتی",
  },
  {
    img: "/images/ghabz.png",
    title: "پرداخت قبوض",
  },
];
export { featuresConstant, servicesConstant };
