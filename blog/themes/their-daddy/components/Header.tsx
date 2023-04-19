import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="h-fit py-12">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
