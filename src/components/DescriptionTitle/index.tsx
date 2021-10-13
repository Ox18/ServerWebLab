import React from "react";

interface IDescriptionTitleProps {
  label: string;
}

export const DescriptionTitle: React.FC<IDescriptionTitleProps> = ({
  label,
}) => {
  return <div className="title__header-description">{label}</div>;
};
