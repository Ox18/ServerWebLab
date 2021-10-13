import React, { ChangeEvent } from "react";

interface ITextareaProps {
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<ITextareaProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <textarea
      className="shadow-sm form__group-content form__input-container form__input-container-textarea"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
