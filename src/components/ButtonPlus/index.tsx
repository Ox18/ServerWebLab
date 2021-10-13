import React from "react";

interface IButtonPlusProps {
  onClick: () => void;
}

export const ButtonPlus: React.FC<IButtonPlusProps> = ({ onClick }) => {
  return (
    <>
      <div className="button__plus opacity pointer" onClick={onClick}>
        +
      </div>
    </>
  );
};
