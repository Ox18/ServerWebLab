import React from "react";
import classnames from "classnames";

interface IButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ label, onClick, active }) => {
  return (
    <button
      className={classnames({
        opacity: true,
        button__primary: true,
        "button__primary--active": active,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
