import React from "react";

const Header = ({ title, about }: { title: string; about?: string }) => {
  return (
    <div className="h-fit py-12">
      <h1 className="text-5xl">{title}</h1>
      <p className="text-lg">{about}</p>
    </div>
  );
};

export default Header;
