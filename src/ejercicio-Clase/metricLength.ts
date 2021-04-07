export class MetricLenght {
  /**
   * Constructor que recibe un valor numerico en kilometros
   * @param unidad kilometros recibidas
   */
  constructor(protected unidad: number) {
    this.unidad = unidad;
  }

  /**
   * Funcion para obtener la cantidad de metros que corresponde las kilometros
   * @returns unidad * 1000
   */
  getLenghtByMetros() {
    return this.unidad * 1000;
  }

  /**
   * Funcion para obtener la cantidad de kilometros
   * @returns unidad
   */
  getLenghtByKilometros() {
    return this.unidad;
  }

  /**
   * Funcion para obtener la cantidad de Centimetros que corresponde las kilometros
   * @returns unidad * 100000
   */
  getLenghtByCentimetros() {
    return this.unidad * 100000;
  }
}
