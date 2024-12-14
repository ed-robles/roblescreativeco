import Image from "next/image";

const TechStack = () => {
  return (
    <div className="m-4 justify-center items-center text-center">
      <div>
        <h1 className="text-[#4FBBFF] text-xl font-extrabold my-2">
          Technologies We Use
        </h1>
      </div>
      <div>
        <p className="text-gray-700 my-2">
          We use the latest technologies to build innovative solutions that help
          businesses grow.
        </p>
      </div>
      <div>
        <div>
          <Image src="/nextjs.png" alt="Next.js" width={100} height={100} />
        </div>
        <div>
          <Image src="/sanity.png" alt="Sanity" width={100} height={100} />
        </div>
        <div>
          <Image src="/clerk.png" alt="Clerk" width={100} height={100} />
        </div>
        <div>
          <Image src="/stripe2.png" alt="Stripe" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
