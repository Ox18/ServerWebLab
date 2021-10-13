import { IAction } from "../interfaces/IAction";

import { ICard } from "../../interfaces/ICard";

import { types } from "../types/types";

export interface IInitialStateCardReducer {
  loading: boolean;
  error: string;
  data: {
    todo: ICard[];
    inprocess: ICard[];
    finished: ICard[];
  };
  loadingCard: {
    todo: boolean;
    inprocess: boolean;
    finished: boolean;
  };
  modal: {
    openAddCard: boolean;
  };
  typeModal: {
    openAddCard: string;
  };
}

/**
 * Estado initial para cards
 */
const initialState: IInitialStateCardReducer = {
  loading: false,
  error: "",
  data: {
    todo: [],
    inprocess: [],
    finished: [],
  },
  loadingCard: {
    todo: false,
    inprocess: false,
    finished: false,
  },
  modal: {
    openAddCard: false,
  },
  typeModal: {
    openAddCard: "",
  },
};

export const cardReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.setLoading:
      return {
        ...state,
        loading: action.payload,
      };
    case types.setError:
      return {
        ...state,
        error: action.payload,
      };
    case types.setDataToDo:
      return {
        ...state,
        data: {
          ...state.data,
          todo: action.payload,
        },
      };
    case types.setDataInProcess:
      return {
        ...state,
        data: {
          ...state.data,
          inprocess: action.payload,
        },
      };
    case types.setDataDone:
      return {
        ...state,
        data: {
          ...state.data,
          finished: action.payload,
        },
      };
    case types.setLoadingDone:
      return {
        ...state,
        loadingCard: {
          ...state.loadingCard,
          finished: action.payload,
        },
      };
    case types.setLoadingInProcess:
      return {
        ...state,
        loadingCard: {
          ...state.loadingCard,
          inprocess: action.payload,
        },
      };
    case types.setLoadingToDo:
      return {
        ...state,
        loadingCard: {
          ...state.loadingCard,
          todo: action.payload,
        },
      };
    case types.removeCardDoneById:
      return {
        ...state,
        data: {
          ...state.data,
          finished: state.data.finished.filter(
            (card: ICard) => card.Id !== action.payload
          ),
        },
      };
    case types.removeCardInProcessById:
      return {
        ...state,
        data: {
          ...state.data,
          inprocess: state.data.inprocess.filter(
            (card: ICard) => card.Id !== action.payload
          ),
        },
      };
    case types.removeCardToDoById:
      return {
        ...state,
        data: {
          ...state.data,
          todo: state.data.todo.filter(
            (card: ICard) => card.Id !== action.payload
          ),
        },
      };
    case types.setOpenModalAddCard:
      return {
        ...state,
        modal: {
          ...state.modal,
          openAddCard: action.payload,
        },
      };
    case types.setTypeModalAddCard:
      return {
        ...state,
        typeModal: {
          ...state.typeModal,
          openAddCard: action.payload,
        },
      };
    default:
      return state;
  }
};
