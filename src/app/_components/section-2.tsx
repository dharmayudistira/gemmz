import Image from "next/image";

export const Section2 = () => {
  return (
    <div>
      <Image
        src={"/assets/asset4.gif"}
        width={10000}
        height={10000}
        alt="asset4"
        className="absolute right-[40%] top-[33%] h-[25vh] w-auto"
        priority
      />

      <Image
        src={"/assets/asset5.gif"}
        width={10000}
        height={10000}
        alt="asset5"
        className="absolute left-[10%] top-[40%] h-[25vh] w-auto"
        priority
      />
    </div>
  );
};
