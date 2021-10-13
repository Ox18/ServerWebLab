import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CardHandlerAction } from "../../redux/actions/Card/CardHandlerAction";

interface IButtonOptionProps {
  id?: number;
}

const cardHandlerAction = new CardHandlerAction();

export const ButtonOption: React.FC<IButtonOptionProps> = ({ id = 0 }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(cardHandlerAction.startDeleteCard(id));
  };

  return (
    <>
      <div className="pointer opacity" onClick={handleDelete}>
        <AiFillDelete size={20} color="#a4a3a3" />
      </div>
    </>
  );
};
