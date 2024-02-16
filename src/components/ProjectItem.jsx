import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ color, title, img, link, desc }) => {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`}
    >
      <div className="flex flex-col gap-8 text-white">
        <h1 className="text-xl font=bold md:text-4xl lg:text-6xl xl:text-8xl">
          {title}
        </h1>
        <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
          <Image src={img} alt={title} fill />
        </div>
        <p className="w-80 md:w-96 lg:w-500px xl:w-[600px] lg:text-lg">
          {desc}
        </p>
        <Link
          className="self-end text-sm p-2 md:p-4 md:text-base lg:p-8 lg:text-lg text-gray-600 bg-white rounded-lg hover:opacity-75"
          href={link}
        >
          Visit Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
