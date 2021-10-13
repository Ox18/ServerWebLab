import React from "react";

import { DescriptionTitle } from "../components/DescriptionTitle";
import { Title } from "../components/Title";
import { Header } from "../components/Header";
import { HeaderButtonsView } from "./HeaderButtonsView";

export const HeaderView = () => {
  return (
    <Header>
      <DescriptionTitle label="Sistema de información" />
      <Title label="KANBAN" />
      <HeaderButtonsView />
    </Header>
  );
};
