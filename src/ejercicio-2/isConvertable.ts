/**
 * Interfaz generica para la conversión
 */

export interface isConvertable<T> {
  cantidad: number;
  unidadActual: T;
  unidadNueva: T;

  /**
   * Funcion para la conversion de unidades
  */
  conversor(): number;
}
