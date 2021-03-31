import {isConvertable} from './isConvertable';

export type temperatureUnit = "Celcius" | "Kelvin" | "Fahrenheit";

export class Temperatura implements isConvertable<temperatureUnit> {
  /**
   * Constructor de la clase
   */
  constructor(public cantidad: number, public unidadActual: temperatureUnit, public unidadNueva: temperatureUnit) {}

  /**
   * Función conversor
   * @returns string con la conversion
  */
  conversor() {
    let salida: number = 0;
    switch (this.unidadActual) {
      case "Celcius":
        switch (this.unidadNueva) {
          case "Kelvin":
            salida = this.cantidad + 273.15;
            break;
          case "Fahrenheit":
            salida = this.cantidad * (9/5) + 32;
            break;
          default:
            break;
        }
        break;
      case "Kelvin":
        switch (this.unidadNueva) {
          case "Celcius":
            salida = this.cantidad - 273.15;
            break;
          case "Fahrenheit":
            salida = (this.cantidad - 273.15) * (9/5) + 32;
            break;
          default:
            break;
        }
        break;
      case "Fahrenheit":
        switch (this.unidadNueva) {
          case "Celcius":
            salida = (this.cantidad - 32) * (5/9);
            break;
          case "Kelvin":
            salida = (this.cantidad - 32) * (5/9) + 273.15;
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
