import React, { ChangeEvent } from "react";

interface IInputComponentProps {
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent: React.FC<IInputComponentProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <div className="shadow-sm form__group-content form__input-container">
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};
