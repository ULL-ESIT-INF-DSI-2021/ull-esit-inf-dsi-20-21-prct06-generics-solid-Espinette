import {Fighter} from "./fighter";

/**
 * Clase DC contiene los datos que debe recibir un objeto tipo DC
 */
export class DC extends Fighter {
  private readonly universo: string = "DC";
  /**
   * Constructor de la clase
   * @param nombre Nombre del DC
   * @param peso Peso del DC
   * @param altura Altura del DC
   * @param tipo Tipo del DC
   * @param datosBasicos Vector de tam 4 que contiene poder de ataque, defensa, velocidad y hp
   */
  constructor(nombre: string, peso: number, altura: number, tipo: string, datosBasicos: number[], coletilla: string) {
    super(nombre, peso, altura, tipo, datosBasicos, coletilla);
  }

  public get getUniverso() {
    return this.universo;
  }
}
