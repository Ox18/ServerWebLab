import axios, { AxiosInstance } from "axios";

/**
 * @class ApiService
 * @description Clase que contiene las configuraciones iniciales
 * para la conexión con el servidor API rest.
 */
class ApiService {
  /**
   * @description Ruta del API
   * @returns {string}
   */
  private BASE_URL: string = "http://192.168.100.3/apiv3/apiv3/api/";

  /**
   * @description Constructor de axios para la conexión con el API
   * @returns {AxiosInstance}
   */
  public BASE: AxiosInstance = axios.create({
    baseURL: this.BASE_URL,
  });
}

export default ApiService;
