import { AxiosResponse } from "axios";
import { ICard } from "../interfaces/ICard";
import ApiService from "./api.service";
import { ICardResponse } from "./Interfaces/CardResponse";

/**
 * @class CardService
 * @description Servicio para las cards de la API
 */
class CardService extends ApiService {
  constructor() {
    super();
  }

  /**
   * @description Obtiene todas las cards
   * @returns {Promise<AxiosResponse<ICardResponse>>}
   */
  Get(): Promise<AxiosResponse<ICardResponse>> {
    return this.BASE.get(this.URL);
  }

  /**
   * Método para crear tarjetas
   * @param card Tarjeta a crear
   * @returns {Promise<AxiosResponse<ICardResponse>>}
   */
  Post(card: ICard): Promise<AxiosResponse<ICardResponse>> {
    return this.BASE.post(this.URL, {
      Name: card.Name,
      Description: card.Description,
      category: card.category,
    });
  }

  /**
   * Método para eliminar una tarjeta en base a su ID
   * @param id Id de la tarjeta a eliminar
   * @returns {Promise<AxiosResponse<ICardResponse>>}
   */
  Delete(id: number): Promise<AxiosResponse<ICardResponse>> {
    return this.BASE.delete(`${this.URL}?id=${id}`);
  }

  /**
   * @description Ruta para obtener todas las cards
   * @returns {string}
   */
  private URL: string = "Cards";
}

export default CardService;
