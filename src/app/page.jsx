import { Button } from "@/components/ui/button";
import Image from "next/image";

import PageTransitionProvider from "@/components/PageTransitionProvider";
import Link from "next/link";

const Homepage = () => {
  return (
    <PageTransitionProvider>
      <section className="h-full flex flex-col lg:flex-row container">
        <div className="wrapper relative">
          {/* image */}
          <Image
            src="/hero.png"
            alt="profile"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex wrapper flex-col gap-2 lg:gap-8 justify-center items-center">
          {/* text */}
          <h1 className="text-4xl md:text-6xl font-bold">
               Hi, I&apos;m Yiannis — Web Developer
          </h1>
          <p className="md:text-xl">
             I build modern, high-performance web applications with Next.js, React, and the 
  MERN stack. Passionate about clean code, responsive design, and delivering 
  seamless user experiences.
          </p>
          <div className="flex gap-x-4 w-full ">
            <Button as child><Link href="/portfolio">View My Work</Link></Button>
            <Button as child
              variant="outline"
              className="bg-transparent border-black hover:bg-black hover:text-white"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTransitionProvider>
  );
};

export default Homepage;
