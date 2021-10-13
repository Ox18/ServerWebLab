import React from "react";

interface ITitleProps {
  label: string;
}

export const Title: React.FC<ITitleProps> = ({ label }) => {
  return <div className="title__header">{label}</div>;
};
