import {ImperialLenght} from "./imperialLength";
import {MetricLenght} from "./metricLength";

export class AdapterLenght extends MetricLenght {
  /**
   * Constructor que recibe una unidad tipo imperial
   * @param unidad llama al constructor de la clase metriclenght
   */
  constructor(unidad: ImperialLenght) {
    super(unidad.getLenghtByMillas());
  }

  /**
   * Funcion para obtener los centimetros tras haber recibido una unidad en imperial
   * @returns Centimetros
   */
  getLenghtByCentimetros() {
    return this.unidad * 160934;
  }

  /**
   * Funcion para obtener los metros tras haber recibido una unidad en imperial
   * @returns metros
   */
  getLenghtByMetros() {
    return this.unidad * 1609.34;
  }

  /**
   * Funcion para obtener los kilometros tras haber recibido una unidad en imperial
   * @returns kilometros
   */
  getLenghtByKilometros() {
    return this.unidad * 1.60934;
  }
}
