import React from "react";
import { Label } from "./styles";

interface ILabelComponentProps {
  text: string;
}

export const LabelComponent: React.FC<ILabelComponentProps> = ({ text }) => {
  return <Label>{text}</Label>;
};
