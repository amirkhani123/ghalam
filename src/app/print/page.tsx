import {
  SocialBaleColor,
  SocialEitaColor,
  SocialRubikaColor,
} from "@persianlabs/icons/react";
import Link from "next/link";
import { CgAlignLeft } from "react-icons/cg";
import { MdMobileFriendly } from "react-icons/md";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen mt-20 px-4 py-12 font-vazirmatn flex flex-col items-center justify-start">
      <header className="text-center mb-10 max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 w-full">
          خدمات الکترونیک قضایی غیرحضوری و حضوری قلم
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          ارسال فایل برا پرینت از راهای زیر
        </p>
      </header>

      <div className="flex flex-col gap-3 w-full max-w-md">
        <Link
          href="tel:09029555426"
          className="group relative overflow-hidden rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-md border border-gray-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
              <MdMobileFriendly className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium">
                ذخیره شماره همراه
              </span>
              <span className="text-base font-bold text-gray-800 text-right">
                5426 955 0902
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="https://eitaa.com/ghalaaamm"
          className="group flex items-center gap-4 rounded-2xl bg-white p-4 border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-orange-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-100">
            <SocialEitaColor />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800">
              ارسال از ایتا
            </span>
          </div>
        </Link>
        <Link
          href="https://ble.ir/ghalaaamm"
          className="group flex items-center gap-4 rounded-2xl bg-white p-4 border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-orange-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-100">
            <SocialBaleColor />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800">
              ارسال از بله
            </span>
          </div>
        </Link>
        <Link
          href="https://rubika.ir/ghalaaamm"
          className="group flex items-center gap-4 rounded-2xl bg-white p-4 border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-orange-100" //ghalaaamm""
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-100">
            <SocialRubikaColor />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800">
              ارسال از روبیکا
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
}
