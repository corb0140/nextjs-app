"use client";

import { useRouter } from "next/navigation";
import robot from "../../public/vecteezy_ai-generated-small-robots-futuristic-marvels-of-artificial_24238434.png";

const page = () => {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };

  return (
    <div className="container mx-w-full flex-col flex justify-center items-center p-10">
      <h1 className="text-2xl">404 Location not found</h1>

      <img src={robot.src} alt="image of cute robot" />

      <button
        className="bg-purple-950 px-16 py-3 cursor-pointer"
        onClick={back}
      >
        back to homepage
      </button>
    </div>
  );
};

export default page;
