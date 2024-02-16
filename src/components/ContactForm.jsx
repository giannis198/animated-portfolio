import { Button } from "./ui/button";

const ContactForm = () => {
  return (
    <form className=" z-[99999] relative bg-red-50 h-4/5 lg:h-full lg:w-1/2 flex flex-col items-start justify-center rounded-xl text-xl gap-8 p-10 lg:p-24">
      <span>Dear Yiannis Dev.</span>
      <textarea
        placeholder="Describe your project..."
        rows={6}
        className="bg-transparent border-b-2 border-b-black outline-none  resize-none"
      />
      <span>My email is:</span>
      <input
        placeholder="email..."
        type="text"
        className="bg-transparent border-b-2 border-b-black outline-none"
      />
      <span>Regards</span>
      <Button className="bg-purple-200 w-full text-gray-600 hover:text-white">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
