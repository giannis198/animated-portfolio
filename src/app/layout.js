import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yiannis Dev Portfolio",
  description:
    "Portfolio of Yiannis, a skilled web developer specializing in Next.js and React.js. Showcasing modern, high-performance web applications, responsive design, and full-stack development projects.",
  keywords: [
    "Next.js developer",
    "React.js developer",
    "Full-stack web developer",
    "MERN stack",
    "JavaScript",
    "TypeScript",
    "Frontend developer",
    "Backend developer",
    "Web performance optimization",
    "Responsive design",
    "Yiannis portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TransitionProvider>
          <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
            <div className="h-24">
              <Navbar />
            </div>
            <div className="h-[calc(100vh-6rem)]">{children}</div>
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
