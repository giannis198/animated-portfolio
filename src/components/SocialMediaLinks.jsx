import Image from "next/image";
import Link from "next/link";

const SocialMediaLinks = () => {
  return (
    <>
      <Link href="#">
        <Image src="/github.png" alt="github" width={24} height={24} />
      </Link>
      <Link href="#">
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
      </Link>
      <Link href="#">
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
      </Link>
    </>
  );
};

export default SocialMediaLinks;
