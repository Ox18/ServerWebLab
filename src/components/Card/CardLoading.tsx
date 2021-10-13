import React from "react";
import Skeleton from "react-loading-skeleton";

import { ButtonOption } from "../ButtonOption";

export const CardLoading = () => {
  return (
    <div className="card__container shadow-sm">
      <div className="card__container--option">
        <ButtonOption />
      </div>
      <div className="card__container--title">
        <Skeleton />
      </div>
      <div className="card__container--description">
        <Skeleton height={80} />
      </div>
    </div>
  );
};
