import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const CustomLink = ({ href, children, className }: LinkProps) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    window.location.href = href;
  };
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;
