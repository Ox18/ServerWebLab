import { types } from "../../types/types";
import { ICard } from "../../../interfaces/ICard";
import { IResponseReducer } from "../../interfaces/IResponseReducer";

/**
 * Clase para las acciones de card
 */
class CardAction {
  /**
   * Método para llamar al servicio de get
   * @param loading define si se estan cargando las páginas
   * @returns {IResponseReducer}
   */
  setLoading(loading: boolean): IResponseReducer {
    return {
      type: types.setLoading,
      payload: loading,
    };
  }

  /**
   * Método para insertar un error en el estado global
   * @param error define si hay un error
   * @returns {IResponseReducer}  retorna un objeto con el tipo y el payload
   */
  setError(error: string): IResponseReducer {
    return {
      type: types.setError,
      payload: error,
    };
  }

  /**
   * Método para insertar datos de tipo to do
   * @param data define la data que se va a insertar
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setDataToDo(data: ICard[]): IResponseReducer {
    return {
      type: types.setDataToDo,
      payload: data,
    };
  }

  /**
   * Método para insertar datos de tipo process
   * @param data define la data que se va a insertar
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setDataInProcess(data: ICard[]): IResponseReducer {
    return {
      type: types.setDataInProcess,
      payload: data,
    };
  }

  /**
   * Método para insertar datos de tipo done
   * @param data define la data que se va a insertar
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setDataDone(data: ICard[]): IResponseReducer {
    return {
      type: types.setDataDone,
      payload: data,
    };
  }

  /**
   * Método para cargar los datos de to do
   * @param loading define si se estan cargando las card todo
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setLoadingToDo(loading: boolean): IResponseReducer {
    return {
      type: types.setLoadingToDo,
      payload: loading,
    };
  }

  /**
   * Método para cargar los datos de process
   * @param loading define si se estan cargando las card done
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setLoadingInProcess(loading: boolean): IResponseReducer {
    return {
      type: types.setLoadingInProcess,
      payload: loading,
    };
  }

  /**
   * Método para cargar los datos de done
   * @param loading define si se estan cargando las card done
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setLoadingDone(loading: boolean): IResponseReducer {
    return {
      type: types.setLoadingDone,
      payload: loading,
    };
  }

  /**
   * Método para resetear el estado de las card done
   * @returns {any}
   */
  resetCardsDone(): any {
    return (dispatch: any) => {
      dispatch(this.setDataDone([]));
    };
  }

  /**
   * Método para resetear el estado de las card in process
   * @returns {any}
   */
  resetCardsInProcess(): any {
    return (dispatch: any) => {
      dispatch(this.setDataInProcess([]));
    };
  }

  /**
   * Método para resetear el estado de las card to do
   * @returns {any}
   */
  resetCardsToDo(): any {
    return (dispatch: any) => {
      dispatch(this.setDataToDo([]));
    };
  }

  /**
   * Método para remover la card de tipo to do
   * @param id id del card
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  removeCardToDoById(id: number): IResponseReducer {
    return {
      type: types.removeCardToDoById,
      payload: id,
    };
  }

  /**
   * Método para remover la card de tipo process
   * @param id id del card
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  removeCardInProcessById(id: number): IResponseReducer {
    return {
      type: types.removeCardInProcessById,
      payload: id,
    };
  }

  /**
   * Método para remover la card de tipo done
   * @param id id del card
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  removeCardDoneById(id: number): IResponseReducer {
    return {
      type: types.removeCardDoneById,
      payload: id,
    };
  }

  /**
   * Método para abrir o cerrar el modal de agregar card
   * @param open open modal add card
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setOpenModalAddCard(open: boolean): IResponseReducer {
    return {
      type: types.setOpenModalAddCard,
      payload: open,
    };
  }

  /**
   * Método para cambiar el tipo de modal en add card
   * @param type change type modal add card
   * @returns {IResponseReducer} retorna un objeto con el tipo y el payload
   */
  setTypeModalAddCard(type: string): IResponseReducer {
    return {
      type: types.setTypeModalAddCard,
      payload: type,
    };
  }
}

export default CardAction;
