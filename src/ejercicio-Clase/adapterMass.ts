import {ImperialMass} from "./imperialMass";
import {MetricMass} from "./metricMass";

export class AdapterMass extends MetricMass {
  /**
   * Constructor que recibe una unidad tipo imperial
   * @param unidad llama al constructor de la clase metricMass
   */
  constructor(unidad: ImperialMass) {
    super(unidad.getMassByMillas());
  }

  /**
   * Funcion para obtener los centimetros tras haber recibido una unidad en imperial
   * @returns Centimetros
   */
  getMassByCentimetros() {
    return this.unidad * 160934;
  }

  /**
   * Funcion para obtener los metros tras haber recibido una unidad en imperial
   * @returns metros
   */
  getMassByMetros() {
    return this.unidad * 1609.34;
  }

  /**
   * Funcion para obtener los kilometros tras haber recibido una unidad en imperial
   * @returns kilometros
   */
  getMassByKilometros() {
    return this.unidad * 1.60934;
  }
}
