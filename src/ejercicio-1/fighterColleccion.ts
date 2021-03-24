import {Fighter} from "./fighter";

export class FighterCollection {
  /**
   * Constructor de la clase
   * @param baseDatos Un vector infinito con los Fighters que tengo
   */
  constructor(private baseDatos: Fighter[]) {
    this.baseDatos = baseDatos;
  }

  /**
   * Función getPokedex()
   * @returns Retorna la pokedex entera
   */
  public getPersonajes() {
    return this.baseDatos;
  }

  /**
   * Funcion setFighter()
   * @param Fighter Fighter a introducir en la pokedex
   */
  public addFighter(fighter: Fighter) {
    this.baseDatos.push(fighter);
  }

  /* public getByNombre(nombreFighter: string) {
    this.baseDatos.forEach((personaje) => {
      if (personaje.getNombre() == nombreFighter) {
        return personaje;
      }
    });
    return "No se encuentra dicho personaje";
  }*/

  /**
   * Funcion finFighter()
   * @param Fighter Fighter a buscar en la pokedex
   * @returns El Fighter con sus datos
   */
  public findFighter(fighter: Fighter) {
    let pos: number = -1;
    this.baseDatos.forEach((i) => {
      if (i == fighter) {
        pos = this.baseDatos.indexOf(i);
      }
    });
    if (pos == -1) {
      return 'No se encuentra al personaje en la base de datos';
    }
    return `${this.baseDatos[pos].getNombre()} se ha encontrado en la posicion ${pos}`;
  }

  /**
   * Funcion para mostrar la pokedex
   */
  public mostrarPersonajes() {
    console.table(this.baseDatos, ["nombre", "peso", "altura", "tipo", "coletilla"]);
  }
}
