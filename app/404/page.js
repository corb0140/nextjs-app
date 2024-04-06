"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import robot from "../../public/vecteezy_ai-generated-small-robots-futuristic-marvels-of-artificial_24238434.png";

const page = () => {
  const router = useRouter();

  const home = () => {
    router.push("/");
  };

  return (
    <div className="container max-w-full flex flex-col  justify-center items-center p-10">
      <h1 className="text-2xl text-white">404 Location not found</h1>

      <div className="block w-96">
        <Image src={robot} alt="image of cute robot" className="w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <button
          className="bg-purple-950 px-16 py-3 text-white cursor-pointer"
          onClick={home}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default page;
