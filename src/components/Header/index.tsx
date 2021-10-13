import React from "react";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
  return <div className="header__container shadow-sm">{children}</div>;
};
