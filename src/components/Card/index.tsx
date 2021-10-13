import React, { useState } from "react";
import { HiFlag } from "react-icons/hi";
import classNames from "classnames";

import { useDrag } from "../../hooks/useDrag";
import { ButtonOption } from "../ButtonOption";

interface ICardProps {
  label?: string;
  description?: string;
  day?: string;
  id?: number;
}

export const Card: React.FC<ICardProps> = ({ id, label, description, day }) => {
  const [dragStartHandler, onDrop, onDragOver, onDragEnd] = useDrag();
  const [isDrag, setIsDrag] = useState(false);

  const handleDelete = () => {
    alert("A");
  };

  return (
    <>
      <div
        className={classNames("card", {
          card__container: true,
          "shadow-sm": true,
          "card__container-drag": isDrag,
        })}
        onDragStart={(event) => {
          setIsDrag(true);
          return dragStartHandler(event, "complete");
        }}
        onDragOver={(event) => {
          event.preventDefault();
          return onDragOver(event, "complete");
        }}
        onDragEnd={(event) => {
          event.preventDefault();
          setIsDrag(false);
          return onDragEnd(event, "complete");
        }}
        draggable={true}
        onDrop={(event) => {
          event.stopPropagation();
          event.preventDefault();
          return onDrop(event, "complete");
        }}
      >
        <div className="card__container--option">
          <ButtonOption id={id} />
        </div>
        <div className="card__container--title">{label}</div>
        <div className="card__container--description">{description}</div>
        <div className="card__container--fetch">
          <HiFlag />
          <div>{day}</div>
        </div>
      </div>
    </>
  );
};
