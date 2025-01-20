import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="absolute left-0 right-0 top-10 flex w-full justify-center">
      <div className="flex w-[80vw] items-center justify-between">
        <Image
          src={"/assets/asset-title.gif"}
          width={1000}
          height={1000}
          alt="Title"
          className="h-[10vh] w-auto"
          priority
        />

        <div className="flex items-center gap-10">
          <Link href={""}>
            <Image
              src={"/assets/link-dex.png"}
              width={1000}
              height={1000}
              alt="DEX"
              className="h-[8vh] w-auto hover:animate-shake"
              priority
            />
          </Link>

          <Link href={""}>
            <Image
              src={"/assets/link-x.png"}
              width={1000}
              height={1000}
              alt="X"
              className="h-[8vh] w-auto hover:animate-shake"
              priority
            />
          </Link>

          <Link href={""}>
            <Image
              src={"/assets/link-tg.png"}
              width={1000}
              height={1000}
              alt="Telegram"
              className="h-[8vh] w-auto hover:animate-shake"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
