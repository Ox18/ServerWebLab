import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../components/Card";
import { HeaderGroup } from "../components/HeaderGroup";
import { GroupCardViewLoading } from "./GroupCardListLoadingView";
import { IState } from "../redux/interfaces/IState";
import { CardEmptyComponent } from "../components/Card/CardEmpty.component";
import { ICard } from "../interfaces/ICard";
import TimestampConvert from "../utils/TimestampConvert";

export const GroupListProcess = () => {
  const cardState = useSelector((state: IState) => state.card);

  const { inprocess } = cardState.data;

  const onClick = () => {
    console.log("Clicked");
  };

  const loading = cardState.loadingCard.inprocess;

  return (
    <div>
      <HeaderGroup
        label="in process"
        onClick={onClick}
        type="inprocess"
        count={inprocess.length}
      />
      <div className="groud__card--item--list animate__animated animate__fadeIn">
        {loading && <GroupCardViewLoading />}
        {Number(inprocess.length) === 0 && !loading && <CardEmptyComponent />}
        {!loading &&
          inprocess.map((card: ICard) => {
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
