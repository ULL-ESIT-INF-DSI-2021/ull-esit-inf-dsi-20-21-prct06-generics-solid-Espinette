import {Fighter} from "./fighter";

/**
 * Clase StarWars contiene los datos que debe recibir un objeto tipo StarWars
 */
export class StarWars extends Fighter {
  private readonly universo: string = "Star Wars";
  /**
   * Constructor de la clase
   * @param nombre Nombre del StarWars
   * @param peso Peso del StarWars
   * @param altura Altura del StarWars
   * @param tipo Tipo del StarWars
   * @param datosBasicos Vector de tam 4 que contiene poder de ataque, defensa, velocidad y hp
   */
  constructor(nombre: string, peso: number, altura: number, tipo: string, datosBasicos: number[], coletilla: string) {
    super(nombre, peso, altura, tipo, datosBasicos, coletilla);
  }

  public get getUniverso() {
    return this.universo;
  }
}
