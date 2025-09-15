import Image from "next/image";
import Link from "next/link";

const SocialMediaLinks = () => {
  return (
    <>
      <Link href="https://github.com/giannis198">
        <Image src="/github.png" alt="github" width={24} height={24} />
      </Link>
      {/* <Link href="#">
        <Image src="/dribble.png" alt="dribble" width={24} height={24} />
      </Link>
      <Link href="#">
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      </Link>
      <Link href="#">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
      </Link>
      <Link href="#">
        <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
      </Link> */}
      <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSfCNHfIyQXmOqrbl5KdA8g%3D%3D">
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
      </Link>
    </>
  );
};

export default SocialMediaLinks;
