import {Fighter} from "./fighter";

/**
 * Clase Marvel contiene los datos que debe recibir un objeto tipo Marvel
 */
export class Marvel extends Fighter {
  private readonly universo: string = "Marvel";
  /**
   * Constructor de la clase
   * @param nombre Nombre del Marvel
   * @param peso Peso del Marvel
   * @param altura Altura del Marvel
   * @param tipo Tipo del Marvel
   * @param datosBasicos Vector de tam 4 que contiene poder de ataque, defensa, velocidad y hp
   */
  constructor(nombre: string, peso: number, altura: number, tipo: string, datosBasicos: number[], coletilla: string) {
    super(nombre, peso, altura, tipo, datosBasicos, coletilla);
  }

  public get getUniverso() {
    return this.universo;
  }
}
