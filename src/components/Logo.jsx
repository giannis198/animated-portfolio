import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link
        href="/"
        className="text-sm bg-black rounded-md p-1 font-semibold space-x-1 flex items-center justify-center"
      >
        <span className="text-white">Yiannis</span>
        <span className="w-12 h-8 rounded text-black bg-white flex items-center justify-center ">
          .dev
        </span>
      </Link>
    </>
  );
};

export default Logo;
