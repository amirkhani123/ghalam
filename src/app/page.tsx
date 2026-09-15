import Banner from "@/components/Banner";

import Line from "@/components/Line";
import Platforms from "@/components/Platforms";
import Services from "@/components/Services";
import CoffeNet from "./../components/CoffeNet";

export default function Home() {
  return (
    <>
      <Banner />
      <Line text="خدمات الکتروییک قضایی" />
      <Services />

      <Line text="کافی نت " />
      <CoffeNet />
      <Line text="راه های ارتباطی" />
      <Platforms />
    </>
  );
}
