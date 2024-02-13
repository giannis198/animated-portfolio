import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ color, title, img, link, desc }) => {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`}
    >
      <div className="flex flex-col gap-8 text-white">
        <h1>{title}</h1>
        <div className="relative">
          <Image src={img} alt={title} fill className="object-contain" />
        </div>
        <p>{desc}</p>
        <Link href={link}>Visit Project Page</Link>
      </div>
    </div>
  );
};

export default ProjectItem;
