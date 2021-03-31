/**
 * Interfaz generica para la conversión
 */

export interface isConvertible<T> {
  cantidad: number;
  unidadActual: T;
  unidadNueva: T;

  /**
   * Funcion para la conversion de unidades
  */
  conversor(): string;
}
