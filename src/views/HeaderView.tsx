import React from "react";

import { DescriptionTitle } from "../components/DescriptionTitle";
import { Title } from "../components/Title";
import { Header } from "../components/Header";
import { HeaderButtonsView } from "./HeaderButtonsView";

/**
 * Cabezera que abarca el titulo, la descripción de la ubicación y los botones de navegación
 * @type Componente vista
 * @returns {JSX.Element}
 */
export const HeaderView = () => {
  return (
    <Header>
      <DescriptionTitle label="Sistema de información" />
      <Title label="KANBAN" />
      <HeaderButtonsView />
    </Header>
  );
};
