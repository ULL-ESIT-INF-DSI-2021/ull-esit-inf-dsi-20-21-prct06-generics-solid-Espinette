import {Fighter} from "./fighter";

/**
 * Clase Pokemon contiene los datos que debe recibir un objeto tipo pokemon
 */
export class Pokemon extends Fighter {
  /**
   * Constructor de la clase
   * @param nombre Nombre del pokemon
   * @param peso Peso del pokemon
   * @param altura Altura del pokemon
   * @param tipo Tipo del pokemon
   * @param datosBasicos Vector de tam 4 que contiene poder de ataque, defensa, velocidad y hp
   */
  constructor(nombre: string, peso: number, altura: number, tipo: string, datosBasicos: number[], coletilla: string) {
    super(nombre, peso, altura, tipo, datosBasicos, coletilla);
  }
}
