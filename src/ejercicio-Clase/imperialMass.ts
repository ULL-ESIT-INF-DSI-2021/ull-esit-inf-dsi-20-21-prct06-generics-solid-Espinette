export class ImperialMass {
  private unidad: number
  /**
   * Constructor por defecto
   */
  constructor() {
    this.unidad = 0;
  }
  /**
   * Funcion para obtener la cantidad de pulgadas que corresponde las millas
   * @returns unidad * 63360
   */
  getMassByPulgadas() {
    return this.unidad * 63360;
  }

  /**
   * Funcion que recibe la unidad en pulgadas
   * @param unidad Se convierte a la unidad por defecto que es millas
   */
  setMassByPulgadas(unidad: number) {
    this.unidad = unidad / 63360;
  }
  /**
   * Funcion para obtener la cantidad de millas
   * @returns unidad
   */
  getMassByMillas() {
    return this.unidad;
  }

  /**
   * Funcion que recibe la unidad en millas
   * @param unidad Se convierte a la unidad por defecto que es millas
   */
  setMassByMillas(unidad: number) {
    this.unidad = unidad;
  }
  /**
   * Funcion para obtener la cantidad de yardas que corresponde las millas
   * @returns unidad * 1760
   */
  getMassByYardas() {
    return this.unidad * 1760;
  }

  /**
   * Funcion que recibe la unidad en yardas
   * @param unidad Se convierte a la unidad por defecto que es millas
   */
  setMassByYardas(unidad: number) {
    this.unidad = unidad / 1760;
  }
  /**
   * Funcion para obtener la cantidad de pies que corresponde las millas
   * @returns unidad * 5280
   */
  getMassByPies() {
    return this.unidad * 5280;
  }

  /**
   * Funcion que recibe la unidad en pies
   * @param unidad Se convierte a la unidad por defecto que es millas
   */
  setMassByPies(unidad: number) {
    this.unidad = unidad / 5280;
  }
}
