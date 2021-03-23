/**
 * Clase Pokemon contiene los datos que debe recibir un objeto tipo pokemon
 */
export abstract class Fighter {
  /**
   * Atributo datos basicos que es un vector de tam 4 que contiene poder de ataque, defensa, velocidad y hp
   */
  protected datosBasicos = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    hp: 0,
  }
  /**
   * Constructor de la clase
   * @param nombre Nombre del pokemon
   * @param peso Peso del pokemon
   * @param altura Altura del pokemon
   * @param tipo Tipo del pokemon
   * @param datosBasicos Vector de tam 4 que contiene poder de ataque, defensa, velocidad y hp
   */
  constructor(protected nombre: string, protected peso: number, protected altura: number, protected tipo: string, datosBasicos: number[], protected coletilla: string) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.datosBasicos.ataque = datosBasicos[0];
    this.datosBasicos.defensa = datosBasicos[1];
    this.datosBasicos.velocidad = datosBasicos[2];
    this.datosBasicos.hp = datosBasicos[3];
    this.coletilla = coletilla;
  }

  /**
   * Funcion getNombre()
   * @returns Nombre del pokemon
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * Funcion getPeso()
   * @returns Peso del pokemon
   */
  public getPeso() {
    return this.peso;
  }

  /**
   * Funcion getAltura()
   * @returns Altura del pokemon
   */
  public getAltura() {
    return this.altura;
  }

  /**
   * Funcion getTipo()
   * @returns Tipo del pokemon
   */
  public getTipo() {
    return this.tipo;
  }

  /**
   * Funcion getDatosBasicos()
   * @returns El dato deseado entre ataque, defensa, velocidad o hp
   */
  public getDatosBasicos() {
    return this.datosBasicos;
  }

  public getColetilla() {
    return this.coletilla;
  }

  /**
   * Funcion setHp()
   * @param vida Establece la vida restante del pokemon
   */
  public setHp(vida: number) {
    this.datosBasicos.hp = vida;
  }
}
