import {isConvertable} from './isConvertable';

export type forceUnits = "Newton" | "Kilopondio" | "Dina";

export class Fuerza implements isConvertable<forceUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public cantidad: number, public unidadActual: forceUnits, public unidadNueva: forceUnits) {}

  /**
   * Función conversor
   * @returns string con la conversion
  */
  conversor() {
    let salida: number = 0;
    switch (this.unidadActual) {
      case "Newton":
        switch (this.unidadNueva) {
          case "Kilopondio":
            salida = this.cantidad * 0.101972;
            break;
          case "Dina":
            salida = this.cantidad * 100000;
            break;
          default:
            break;
        }
        break;
      case "Kilopondio":
        switch (this.unidadNueva) {
          case "Newton":
            salida = this.cantidad * 9.80665;
            break;
          case "Dina":
            salida = this.cantidad * 980665;
            break;
          default:
            break;
        }
        break;
      case "Dina":
        switch (this.unidadNueva) {
          case "Newton":
            salida = this.cantidad * 0.00001;
            break;
          case "Kilopondio":
            salida = this.cantidad * 1.0197e-6;
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
