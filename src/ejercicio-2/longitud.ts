import {isConvertable} from './isConvertable';

export type longUnit = "Kilometro" | "Yarda" | "Milla";

export class Longitud implements isConvertable<longUnit> {
  /**
   * Constructor de la clase
   */
  constructor(public cantidad: number, public unidadActual: longUnit, public unidadNueva: longUnit) {}

  /**
   * Función conversor
   * @returns string con la conversion
  */
  conversor() {
    let salida: number = 0;
    switch (this.unidadActual) {
      case "Kilometro":
        switch (this.unidadNueva) {
          case "Yarda":
            salida = this.cantidad * 1093.61;
            break;
          case "Milla":
            salida = this.cantidad * 0.621371;
            break;
          default:
            break;
        }
        break;
      case "Yarda":
        switch (this.unidadNueva) {
          case "Kilometro":
            salida = this.cantidad * 0.0009144;
            break;
          case "Milla":
            salida = this.cantidad * 0.000568182;
            break;
          default:
            break;
        }
        break;
      case "Milla":
        switch (this.unidadNueva) {
          case "Kilometro":
            salida = this.cantidad * 1.60934;
            break;
          case "Yarda":
            salida = this.cantidad * 1760;
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
