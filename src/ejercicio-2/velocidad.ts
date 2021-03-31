import {isConvertable} from './isConvertable';

export type speedUnits = "Millas/h" | "Km/h" | "m/s";

export class Velocidad implements isConvertable<speedUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public cantidad: number, public unidadActual: speedUnits, public unidadNueva: speedUnits) {}

  /**
   * Función conversor
   * @returns string con la conversion
  */
  conversor() {
    let salida: number = 0;
    switch (this.unidadActual) {
      case "Millas/h":
        switch (this.unidadNueva) {
          case "Km/h":
            salida = this.cantidad * 1.60934;
            break;
          case "m/s":
            salida = this.cantidad * 0.44704;
            break;
          default:
            break;
        }
        break;
      case "Km/h":
        switch (this.unidadNueva) {
          case "Millas/h":
            salida = this.cantidad * 0.621371;
            break;
          case "m/s":
            salida = this.cantidad * 0.277778;
            break;
          default:
            break;
        }
        break;
      case "m/s":
        switch (this.unidadNueva) {
          case "Millas/h":
            salida = this.cantidad * 2.23694;
            break;
          case "Km/h":
            salida = this.cantidad * 3.6;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    return salida;
  }
}
