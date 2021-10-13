import { ICard } from "../../interfaces/ICard";
import { IResponse } from "./Response";

export interface ICardResponse extends IResponse {
  Data: ICard[];
}
