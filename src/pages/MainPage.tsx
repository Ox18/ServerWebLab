import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GroupCardView } from "../views/GroupCardView";
import { HeaderView } from "../views/HeaderView";

import { CardHandlerAction } from "../redux/actions/Card/CardHandlerAction";
/**
 * Página principal
 * @type Componente Pagina
 * @returns {JSX.Element}
 */
export const MainPage = () => {
  const dispatch = useDispatch();
  const cardHandlerAction = new CardHandlerAction();

  useEffect(() => {
    dispatch(cardHandlerAction.startLoadCards());
  }, [dispatch, cardHandlerAction]);

  return (
    <>
      <HeaderView />
      <GroupCardView />
    </>
  );
};
