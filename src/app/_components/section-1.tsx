import Image from "next/image";

export const Section1 = () => {
  return (
    <div>
      <Image
        src={"/assets/asset1.gif"}
        width={10000}
        height={10000}
        alt="asset1"
        className="absolute left-[20%] top-[20%] h-[25vh] w-auto"
        priority
      />

      <Image
        src={"/assets/asset2.gif"}
        width={10000}
        height={10000}
        alt="asset2"
        className="absolute right-[20%] top-[17%] h-[25vh] w-auto"
        priority
      />

      <Image
        src={"/assets/asset3.png"}
        width={10000}
        height={10000}
        alt="asset3"
        className="absolute right-[5%] top-[20%] h-[11vh] w-auto"
        priority
      />
    </div>
  );
};
