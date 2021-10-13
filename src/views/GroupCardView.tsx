import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { GroupListFinished } from "./GroupListFinishedView";
import { GroupListProcess } from "./GroupListProcessView";
import { GroupListToDo } from "./GroupListToDoView";

export const GroupCardView = () => {
  return (
    <div className="group__card--view">
      <DndProvider backend={HTML5Backend}>
        <GroupListToDo />
        <GroupListProcess />
        <GroupListFinished />
      </DndProvider>
    </div>
  );
};
