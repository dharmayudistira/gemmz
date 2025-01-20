import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="absolute left-0 right-0 top-[2%] flex w-full justify-center">
      <div className="flex w-[80vw] items-center justify-between">
        <Image
          src={"/assets/asset-title.gif"}
          width={1000}
          height={1000}
          alt="Title"
          className="h-auto w-[35vw]"
          priority
        />

        <div className="flex items-center gap-10">
          <Link href={""}>
            <Image
              src={"/assets/link-dex.png"}
              width={1000}
              height={1000}
              alt="DEX"
              className="h-auto w-[8vw] hover:animate-shake"
              priority
            />
          </Link>

          <Link href={""}>
            <Image
              src={"/assets/link-x.png"}
              width={1000}
              height={1000}
              alt="X"
              className="h-auto w-[8vw] hover:animate-shake"
              priority
            />
          </Link>

          <Link href={""}>
            <Image
              src={"/assets/link-tg.png"}
              width={1000}
              height={1000}
              alt="Telegram"
              className="h-auto w-[8vw] hover:animate-shake"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
