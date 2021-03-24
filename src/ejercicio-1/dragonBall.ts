import {Fighter} from "./fighter";

/**
 * Clase DragonBall contiene los datos que debe recibir un objeto tipo DragonBall
 */
export class DragonBall extends Fighter {
  private readonly universo: string = "Dragon Ball";
  /**
   * Constructor de la clase
   * @param nombre Nombre del DragonBall
   * @param peso Peso del DragonBall
   * @param altura Altura del DragonBall
   * @param tipo Tipo del DragonBall
   * @param datosBasicos Vector de tam 4 que contiene poder de ataque, defensa, velocidad y hp
   */
  constructor(nombre: string, peso: number, altura: number, tipo: string, datosBasicos: number[], coletilla: string) {
    super(nombre, peso, altura, tipo, datosBasicos, coletilla);
  }

  public get getUniverso() {
    return this.universo;
  }
}
