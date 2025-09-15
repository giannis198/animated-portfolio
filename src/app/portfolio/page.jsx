"use client";

import CTA from "@/components/CTA";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import ProjectItem from "@/components/ProjectItem";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Threads Clone",
    desc: "A Meta Threads clone built with Next.js 14, TypeScript, Prisma ORM, and MongoDB, featuring TailwindCSS for a sleek UI and Stripe for premium features. Includes user authentication, post creation, likes, comments, and real-time updates. Optimized for performance, SEO, and scalability, leveraging server actions and API routes for efficiency.",
    img: "https://i.postimg.cc/MpXms3zR/Screenshot-2025-09-15-151622.png",
    link: "https://new-threads-clone.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Learning Management Platform",
    desc: "A modern Learning Management Platform built with Next.js 13, TypeScript, Prisma ORM, and TailwindCSS, featuring Stripe for secure course payments. It offers course creation, user authentication, progress tracking, and a sleek UI. Optimized for performance, SEO, and scalability, leveraging server actions and API routes for efficiency.",
    img: "https://i.postimg.cc/QMXnxJDd/Screenshot-2025-09-15-151320.png",
    link: "https://lms-platform-psi-five.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Duo Lingo Clone",
    desc: "A modern Duolingo-inspired language learning application built with Next.js 14, Drizzle ORM, PostgreSQL, and Server Actions. Featuring secure Stripe integration for payments, a sleek UI powered by ShadcnUI and Tailwind, and an engaging gamified learning experience designed for performance and scalability.🚀",
    img: "https://i.postimg.cc/D0stbfMv/Screenshot-2025-09-15-151427.png",
    link: "#",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Ecommerce-Store",
    desc: "A modern e-commerce shop built with Next.js 14, TypeScript, and TailwindCSS, featuring Stripe for secure payments. It includes dynamic product listings, a shopping cart, and checkout, with authentication and admin management. Optimized for performance, SEO, and scalability, leveraging server actions and API routes for efficiency.",
    img: "https://i.postimg.cc/c4fvdQTj/Screenshot-2025-09-15-152054.png",
    link: "https://ecommerce-store-blush-one.vercel.app/",
  },
    {
    id: 5,
    color: "from-red-300 to-white-300",
    title: "Multi-page website",
    desc: "A multi-page space tourism website built with Next.js 14, TypeScript, TailwindCSS, and ShadcnUI. Designed with a sleek, modern UI and fully responsive layout, it showcases seamless navigation, component reusability, and best practices for scalable front-end development.",
    img: "https://i.postimg.cc/CLcRQFKr/Screenshot-2025-09-15-150950.png",
    link: "https://space-tourism-multi-page-website-olive.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <PageTransitionProvider>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((project) => (
              <ProjectItem
                key={project.id}
                color={project.color}
                title={project.title}
                desc={project.desc}
                img={project.img}
                link={project.link}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <CTA />
    </PageTransitionProvider>
  );
};

export default PortfolioPage;
