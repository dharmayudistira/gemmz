import Image from "next/image";

export const Section2 = () => {
  return (
    <div>
      <Image
        src={"/assets/asset4.gif"}
        width={10000}
        height={10000}
        alt="asset4"
        className="absolute right-[40%] top-[35%] h-auto w-[12vw]"
        priority
      />

      <Image
        src={"/assets/asset5.gif"}
        width={10000}
        height={10000}
        alt="asset5"
        className="absolute left-[10%] top-[40%] h-auto w-[15vw]"
        priority
      />
    </div>
  );
};
