"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

function Banner() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center overflow-hidden font-zain ">
      <div className="flex gap-5 items-center justify-center flex-col md:flex-row">
        <Image
          src="/images/main-logo.png"
          alt="تصویر بانر"
          width={500}
          height={1080}
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center gap-5 max-w-3xl mx-auto"
        >
          <motion.h1
            variants={item}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            خدمات الکترونیک قضایی و اینترنتی
          </motion.h1>

          <motion.p
            variants={item}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed"
          >
            غیر حضوری و حضوری
          </motion.p>

          <motion.div
            variants={item}
            className="border border-blue-500/60 rounded-lg px-5 py-3 text-blue-400 text-sm sm:text-base backdrop-blur-sm bg-blue-500/5"
          >
            <p>مرجع تخصصی ثبت دادخواست‌های دیوان عدالت</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;
