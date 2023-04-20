import React from "react";
import { useRouter } from "next/router";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const CustomLink = ({ href, children, className }: LinkProps) => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href, undefined, { shallow: false, scroll: true, force: true });
  };
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;
