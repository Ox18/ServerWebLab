import React from "react";
import { useDispatch } from "react-redux";
import { CardHandlerAction } from "../../redux/actions/Card/CardHandlerAction";
import { ButtonPlus } from "../ButtonPlus";

interface IHeaderGroupProps {
  label: string;
  onClick: () => void;
  count?: number;
  type?: "todo" | "inprocess" | "done";
}

const cardHandlerAction = new CardHandlerAction();

export const HeaderGroup: React.FC<IHeaderGroupProps> = ({
  label,
  onClick,
  count = 0,
  type = "todo",
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(cardHandlerAction.setTypeModalAddCard(type));
    dispatch(cardHandlerAction.setOpenModalAddCard(true));
  };

  return (
    <div className="header__group-item">
      <div className="header__group-subitem">
        <div className="header__group--item-title">{label}</div>
        <div className="header__group--item-count">{count}</div>
      </div>
      <ButtonPlus onClick={handleClick} />
    </div>
  );
};
