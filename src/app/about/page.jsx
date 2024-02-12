import ExperienceItem from "@/components/ExperienceItem";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import ScrollSvg from "@/components/ScrollSvg";
import Skill from "@/components/Skill";
import { Scroll, ScrollIcon } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <PageTransitionProvider>
      <div className="h-full overflow-scroll">
        {/* text */}
        <div className="container flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Biography</h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              eaque dolore natus alias non voluptatum incidunt consequuntur
              quasi. Qui exercitationem animi dicta sunt nulla necessitatibus
              sapiente quo tempora officiis voluptas.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <div className="self-end">
              <Image src="/signature.svg" alt="" width={200} height={100} />
            </div>
            <ScrollSvg />
          </div>

          {/* skills */}
          <div className="flex flex-col gap-12 justify-center">
            {/* title */}
            <h1 className="font-bold text-2xl">Skills</h1>
            {/* list */}
            <div className="flex gap-4 flex-wrap">
              <Skill title="Javascript" />
              <Skill title="TypeScript" />
              <Skill title="React.js" />
              <Skill title="Next.js" />
              <Skill title="Tailwind CSS" />
              <Skill title="MongoDB" />
              <Skill title="Node.js" />
              <Skill title="Express.js" />
              <Skill title="GraphQL" />
              <Skill title="Framer Motion" />
              <Skill title="Git" />
              <Skill title="Figma" />
            </div>
            {/* scroll svg */}
            <ScrollSvg />
          </div>
          {/* experience */}
          <div className="flex flex-col gap-12 justify-center pb-48 ">
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* list */}
            <div className="">
              {/* list item */}
              <ExperienceItem side="left" />
              <ExperienceItem side="right" />
              <ExperienceItem side="left" />
            </div>
          </div>
        </div>
        {/* svg */}

        <div className="hidden"></div>
      </div>
    </PageTransitionProvider>
  );
};

export default AboutPage;
