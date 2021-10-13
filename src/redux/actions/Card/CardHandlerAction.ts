// import { AxiosResponse } from "axios";

// import CardService from "../../../services/card.service";
// import { ICardResponse } from "../../../services/Interfaces/CardResponse";
import { ICard } from "../../../interfaces/ICard";
import CardAction from "./CardAction";
import CardService from "../../../services/card.service";
import { ICardResponse } from "../../../services/Interfaces/CardResponse";
import { AxiosResponse } from "axios";

const cardService = new CardService();

class CardHandlerAction extends CardAction {
  constructor() {
    super();
  }

  /**
   * Método para llamar todas las cards
   */
  startLoadCards(): any {
    // const cardService = new CardService();

    return (dispatch: any) => {
      dispatch(this.setLoadingDone(true));
      dispatch(this.setLoadingInProcess(true));
      dispatch(this.setLoadingToDo(true));
      cardService
        .Get()
        .then((response: AxiosResponse<ICardResponse>) => {
          const { Data, error, message } = response.data;

          if (error) {
            throw new Error(message);
          }

          const cards: ICard[] = [...Data];

          const filterByToDo: ICard[] = cards.filter(
            (card: ICard) => card.category === 0
          );
          const filterByInProcess: ICard[] = cards.filter(
            (card: ICard) => card.category === 1
          );
          const filterByDone: ICard[] = cards.filter(
            (card: ICard) => card.category === 2
          );
          dispatch(this.setDataToDo(filterByToDo));
          dispatch(this.setDataInProcess(filterByInProcess));
          dispatch(this.setDataDone(filterByDone));
        })
        .catch((error: Error) => {
          dispatch(this.setError(error.message));
        })
        .finally(() => {
          dispatch(this.setLoadingDone(false));
          dispatch(this.setLoadingInProcess(false));
          dispatch(this.setLoadingToDo(false));
        });
    };
  }

  startPostCardAddNew(card: ICard): any {
    return (dispatch: any) => {
      dispatch(this.setLoadingDone(true));
      dispatch(this.setLoadingInProcess(true));
      dispatch(this.setLoadingToDo(true));
      cardService
        .Post(card)
        .then((response: AxiosResponse<ICardResponse>) => {
          const { error, message } = response.data;

          if (error) {
            throw new Error(message);
          }
          dispatch(this.setOpenModalAddCard(false));
        })
        .catch((error: Error) => {
          dispatch(this.setError(error.message));
        })
        .finally(() => {
          dispatch(this.startLoadCards());
        });
    };
  }

  startDeleteCard(id: number) {
    return (dispatch: any) => {
      dispatch(this.setLoadingDone(true));
      dispatch(this.setLoadingInProcess(true));
      dispatch(this.setLoadingToDo(true));

      cardService
        .Delete(id)
        .then((response: AxiosResponse<ICardResponse>) => {
          const { error, message } = response.data;

          if (error) {
            throw new Error(message);
          }
          dispatch(this.setOpenModalAddCard(false));
        })
        .catch((error: Error) => {
          dispatch(this.setError(error.message));
        })
        .finally(() => {
          dispatch(this.startLoadCards());
        });
    };
  }
}

export { CardHandlerAction };
