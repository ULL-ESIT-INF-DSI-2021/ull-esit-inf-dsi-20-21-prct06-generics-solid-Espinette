import {isConvertable} from './isConvertable';

export type volumeUnit = "Litro" | "Galon" | "Pie Cubico";

export class Volumen implements isConvertable<volumeUnit> {
  /**
   * Constructor de la clase
   */
  constructor(public cantidad: number, public unidadActual: volumeUnit, public unidadNueva: volumeUnit) {}

  /**
   * Función conversor
   * @returns string con la conversion
  */
  conversor() {
    let salida: number = 0;
    switch (this.unidadActual) {
      case "Litro":
        switch (this.unidadNueva) {
          case "Galon":
            salida = this.cantidad * 0.219969;
            break;
          case "Pie Cubico":
            salida = this.cantidad * 0.0353147;
            break;
          default:
            break;
        }
        break;
      case "Galon":
        switch (this.unidadNueva) {
          case "Litro":
            salida = this.cantidad * 4.54609;
            break;
          case "Pie Cubico":
            salida = this.cantidad * 0.160544;
            break;
          default:
            break;
        }
        break;
      case "Pie Cubico":
        switch (this.unidadNueva) {
          case "Litro":
            salida = this.cantidad * 28.3168;
            break;
          case "Galon":
            salida = this.cantidad * 6.22884;
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
