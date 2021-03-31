import {FighterCollection} from "./fighterColleccion";

/**
 * Clase para mostrar la coleccion
 */
export class MostrarFighterCollection {
  /**
   * Constructor de la clase
   * @param collection Colleccion a mostrar
   */
  constructor(private collection: FighterCollection) {}
  /**
   * Funcion para mostrar los personajes en una tabla
   */
  public mostrarPersonajes() {
    console.table(this.collection.getPersonajes(), ["nombre", "peso", "altura", "tipo", "coletilla"]);
  }
}
