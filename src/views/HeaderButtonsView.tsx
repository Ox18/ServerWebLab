import React from "react";

import { Button } from "../components/Button";
import { HeaderButtons } from "../components/HeaderButtons";

/**
 * Muestra la lista de botones para controlar las pizarras
 * @type Componente vista
 * @returns {JSX.Element}
 */
export const HeaderButtonsView = () => {
  return (
    <HeaderButtons>
      <Button label="Boards" active />
    </HeaderButtons>
  );
};
