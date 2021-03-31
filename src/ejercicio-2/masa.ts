import {isConvertable} from './isConvertable';

export type massUnit = "Kilogramo" | "Libra" | "Onza";

export class Masa implements isConvertable<massUnit> {
  /**
   * Constructor de la clase
   */
  constructor(public cantidad: number, public unidadActual: massUnit, public unidadNueva: massUnit) {}

  /**
   * Función conversor
   * @returns string con la conversion
  */
  conversor() {
    let salida: number = 0;
    switch (this.unidadActual) {
      case "Kilogramo":
        switch (this.unidadNueva) {
          case "Libra":
            salida = this.cantidad * 2.20462;
            break;
          case "Onza":
            salida = this.cantidad * 35.272;
            break;
          default:
            break;
        }
        break;
      case "Libra":
        switch (this.unidadNueva) {
          case "Kilogramo":
            salida = this.cantidad * 0.453592;
            break;
          case "Onza":
            salida = this.cantidad * 16;
            break;
          default:
            break;
        }
        break;
      case "Onza":
        switch (this.unidadNueva) {
          case "Kilogramo":
            salida = this.cantidad * 0.0283495;
            break;
          case "Libra":
            salida = this.cantidad * 0.0625;
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
