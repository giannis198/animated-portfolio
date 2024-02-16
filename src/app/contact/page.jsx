import ContactForm from "@/components/ContactForm";
import MotionText from "@/components/MotionText";
import PageTransitionProvider from "@/components/PageTransitionProvider";

const ContactPage = () => {
  return (
    <PageTransitionProvider>
      <div className="h-full flex flex-col lg:flex-row container">
        {/* Text Container */}
        <div className="h-1/5 lg:h-full lg:w-1/2  flex items-center justify-center text-5xl lg:text-6xl">
          <MotionText text="Say Hello" />
        </div>
        {/* form */}
        <ContactForm />
      </div>
    </PageTransitionProvider>
  );
};

export default ContactPage;
