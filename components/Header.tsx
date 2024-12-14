import Image from "next/image";

const Header = () => {
  return (
    <header className="text-center p-4">
      <Image src="/RCC_Circle_Blue.png" alt="RCC" width={400} height={400} />
    </header>
  );
};

export default Header;
