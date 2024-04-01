import Link from "next/link";

const MastHead = () => {
  return (
    <header className="container max-w-full flex justify-center align-middle bg-purple-950 p-4 text-xl text-center md:text-2xl">
      <Link href="/">
        <h1>The Perfect Food & Movie For Today</h1>
      </Link>
    </header>
  );
};

export default MastHead;
