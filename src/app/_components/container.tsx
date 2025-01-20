import Header from "@/app/_components/header";
import { Section1 } from "@/app/_components/section-1";
import Image from "next/image";
import { Section2 } from "./section-2";
import { Section3 } from "./section-3";

interface ContainerProps {
  config: {
    x_url: string;
    x_dev_url: string;
    buy_url: string;
    docs: string;
  };
}

export default function Container({ config }: ContainerProps) {
  return (
    <main className="relative h-full w-full overflow-hidden">
      <Image
        src={"/assets/bg.png"}
        width={10000}
        height={10000}
        alt="BG"
        className="h-full w-full scale-125"
        priority
      />

      <Image
        src={"/assets/asset9.png"}
        width={10000}
        height={10000}
        alt="footer"
        className="absolute -bottom-[10%] left-0 right-0 h-auto w-full scale-150 object-cover"
        priority
      />

      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
