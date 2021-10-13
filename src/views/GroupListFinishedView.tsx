import React from "react";
import { useSelector } from "react-redux";

import { HeaderGroup } from "../components/HeaderGroup";
import { GroupCardViewLoading } from "./GroupCardListLoadingView";
import { IState } from "../redux/interfaces/IState";
import { CardEmptyComponent } from "../components/Card/CardEmpty.component";
import { ICard } from "../interfaces/ICard";
import { Card } from "../components/Card";
import TimestampConvert from "../utils/TimestampConvert";

export const GroupListFinished = () => {
  const cardState = useSelector((state: IState) => state.card);

  const { finished } = cardState.data;

  const onClick = () => {
    console.log("Clicked");
  };

  const loading = cardState.loadingCard.finished;

  return (
    <div id="GroupListFinishedView">
      <HeaderGroup
        label="finished"
        onClick={onClick}
        type="done"
        count={finished.length}
      />
      <div className="groud__card--item--list animate__animated animate__fadeIn">
        {loading && <GroupCardViewLoading />}
        {Number(finished.length) === 0 && !loading && <CardEmptyComponent />}
        {!loading &&
          finished.map((card: ICard) => {
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
