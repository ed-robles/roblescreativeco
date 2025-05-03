import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/RCC_Circle_Blue.png"
        width={150}
        height={150}
        alt="RCC Circle Logo"
        className="animate-spin-slow"
      />
    </div>
  );
}
