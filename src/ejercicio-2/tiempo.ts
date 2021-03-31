import {isConvertable} from './isConvertable';

export type timeUnit = "Hora" | "Minuto" | "Segundo";

export class Tiempo implements isConvertable<timeUnit> {
  /**
   * Constructor de la clase
   */
  constructor(public cantidad: number, public unidadActual: timeUnit, public unidadNueva: timeUnit) {}

  /**
   * Función conversor
   * @returns string con la conversion
  */
  conversor() {
    let salida: number = 0;
    switch (this.unidadActual) {
      case "Hora":
        switch (this.unidadNueva) {
          case "Minuto":
            salida = this.cantidad * 60;
            break;
          case "Segundo":
            salida = this.cantidad * 3600;
            break;
          default:
            break;
        }
        break;
      case "Minuto":
        switch (this.unidadNueva) {
          case "Hora":
            salida = this.cantidad * 0.0166667;
            break;
          case "Segundo":
            salida = this.cantidad * 60;
            break;
          default:
            break;
        }
        break;
      case "Segundo":
        switch (this.unidadNueva) {
          case "Hora":
            salida = this.cantidad * 0.000277778;
            break;
          case "Minuto":
            salida = this.cantidad * 0.0166667;
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
