import Image from "next/image";

export const Section3 = () => {
  return (
    <div>
      <Image
        src={"/assets/asset6.gif"}
        width={10000}
        height={10000}
        alt="asset6"
        className="absolute left-[43%] top-[50%] h-auto w-[20vw]"
        priority
      />

      <Image
        src={"/assets/asset7.gif"}
        width={10000}
        height={10000}
        alt="asset7"
        className="absolute right-0 top-[50%] h-auto w-[40vw]"
        priority
      />

      <Image
        src={"/assets/asset8.gif"}
        width={10000}
        height={10000}
        alt="asset7"
        className="absolute left-0 top-[55%] h-auto w-[35vw]"
        priority
      />
    </div>
  );
};
