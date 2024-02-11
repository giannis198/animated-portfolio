import Link from "next/link";
import LinkItem from "./LinkItem";

const NavLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <LinkItem key={index} link={link} />
      ))}
    </>
  );
};

export default NavLinks;
