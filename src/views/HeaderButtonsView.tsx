import React from "react";

import { Button } from "../components/Button";
import { HeaderButtons } from "../components/HeaderButtons";

export const HeaderButtonsView = () => {
  return (
    <HeaderButtons>
      <Button label="Boards" active />
    </HeaderButtons>
  );
};
