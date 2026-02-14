import Header from "@/components/Header";
import Line from "@/components/Line";
import Platforms from "@/components/Platforms";
import Services from "@/components/Services";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Header />
      <Line text="چرا ما ؟" />
      <Why />
      <Line text="خدمات " />
      <Services />
     <Line text="راه های ارتباطی"/>
      <Platforms />
    </>
  );
}
