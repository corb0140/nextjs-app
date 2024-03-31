import Link from "next/link";

const MastHead = () => {
  return (
    <header className="container max-w-full flex justify-center align-middle bg-purple-950 py-4 text-2xl">
      <Link href="/" as={"image"}>
        <h1>The Perfect Food & Movie For Today</h1>
      </Link>
    </header>
  );
};

export default MastHead;
