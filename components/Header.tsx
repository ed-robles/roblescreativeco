import Image from "next/image";

const Header = () => {
  return (
    <header className="text-center m-4">
      <Image
        src="/RCC_Blocks_Logo_White.png"
        alt="RCC"
        width={900}
        height={400}
      />
    </header>
  );
};

export default Header;
