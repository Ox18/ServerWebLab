import React from "react";

interface IHeaderButtonsProps {
  children: React.ReactNode;
}

export const HeaderButtons: React.FC<IHeaderButtonsProps> = ({ children }) => {
  return <div className="pt-4">{children}</div>;
};
