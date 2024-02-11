import { Button } from "@/components/ui/button";
import Image from "next/image";

const Homepage = () => {
  return (
    <section className="h-full flex flex-col lg:flex-row container">
      <div className="wrapper relative">
        {/* image */}
        <Image src="/hero.png" alt="profile" fill className="object-contain" />
      </div>
      <div className="flex wrapper flex-col gap-2 justify-center items-center">
        {/* text */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          accusamus debitis dolorum minus assumenda reprehenderit nulla? Neque
          ratione dolorum aspernatur, veritatis eos, provident, ea eveniet
          doloremque facilis nemo doloribus libero.
        </p>
        <div className="flex gap-x-4 w-full ">
          <Button>View My Work</Button>
          <Button
            variant="outline"
            className="bg-transparent border-black hover:bg-black hover:text-white"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
