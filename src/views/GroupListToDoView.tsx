import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../components/Card";
import { CardEmptyComponent } from "../components/Card/CardEmpty.component";
import { HeaderGroup } from "../components/HeaderGroup";
import { ICard } from "../interfaces/ICard";
import { IState } from "../redux/interfaces/IState";
import TimestampConvert from "../utils/TimestampConvert";
import { GroupCardViewLoading } from "./GroupCardListLoadingView";

export const GroupListToDo = () => {
  const cardState = useSelector((state: IState) => state.card);

  const { todo } = cardState.data;

  const onClick = () => {
    console.log("Clicked");
  };

  const loading = cardState.loadingCard.todo;

  return (
    <div id="GroupListToDoView">
      <HeaderGroup
        label="to do"
        onClick={onClick}
        type="todo"
        count={todo.length}
      />
      <div className="groud__card--item--list animate__animated animate__fadeIn">
        {loading && <GroupCardViewLoading />}
        {Number(todo.length) === 0 && !loading && <CardEmptyComponent />}
        {!loading &&
          todo.map((card: ICard) => {
            const time = TimestampConvert.toString(card.created_at);
            return (
              <Card
                key={card.Id}
                label={card.Name}
                description={card.Description}
                day={time.dayWithMonth}
                id={card.Id}
              />
            );
          })}
      </div>
    </div>
  );
};
