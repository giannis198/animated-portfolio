import MotionText from "@/components/MotionText";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import { Button } from "@/components/ui/button";
import React from "react";

const ContactPage = () => {
  return (
    <PageTransitionProvider>
      <div className="h-full flex flex-col lg:flex-row container">
        {/* Text Container */}
        <div className="h-1/4 lg:h-full lg:w-1/2  flex items-center justify-center text-5xl lg:text-6xl">
          <MotionText text="Say Hello" />
        </div>
        {/* form */}
        <form className="bg-red-50 h-3/4 lg:h-full lg:w-1/2 flex flex-col items-start justify-center rounded-xl text-xl gap-8 p-24">
          <span>Dear Yiannis Dev.</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none border-t-2 border-t-black resize-none"
          />
          <span>My email is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <Button className="bg-purple-200 w-full text-gray-600 hover:text-white">
            Send
          </Button>
        </form>
      </div>
    </PageTransitionProvider>
  );
};

export default ContactPage;
