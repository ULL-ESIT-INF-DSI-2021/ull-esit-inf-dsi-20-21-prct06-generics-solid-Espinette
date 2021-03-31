import {Pokemon} from '../ejercicio-1/pokemon';
import {DC} from '../ejercicio-1/dc';
import {StarWars} from '../ejercicio-1/starWars';
import {DragonBall} from '../ejercicio-1/dragonBall';
import {Marvel} from '../ejercicio-1/marvel';
import {Fighter} from './fighter';

/**
 * Clase combat que sirve para realizar un combate entre dos pokemons
 */
export class Combat {
  /**
   * Constructor de la clase
   * @param luchador1 Primer contrincante a luchar
   * @param luchador2 Segundo contrincante a luchar
   */
  constructor(private luchador1: Fighter, private luchador2: Fighter) {
    this.luchador1 = luchador1;
    this.luchador2 = luchador2;
  }

  /**
   * Funcion getCombate
   * @returns Los contricantes que van a participar en la pelea
   */
  public getCombate() {
    return (`Los contricantes son ${this.luchador1.getNombre()} y ${this.luchador2.getNombre()}`);
  }

  /**
   * Funcion dañoPokemon()
   * @param atacante Recibe 0 o 1 en función de quien ataca a quien
   * @returns El daño realizado en ese ataque
   */
  public dañoFighter(atacante: number) {
    let efectividad: number = 0;
    let daño: number = 0;
    switch (this.luchador1.constructor) {
      case Pokemon:
        if (this.luchador1 instanceof Pokemon && this.luchador2 instanceof Pokemon) {
          switch (this.luchador1.getTipo()) {
            case `Fuego`:
              if (this.luchador2.getTipo() == `Hierba`) {
                efectividad = 2;
              } else if (this.luchador2.getTipo() == `Electrico`) {
                efectividad = 1;
              } else {
                efectividad = 0.5;
              }
              break;
            case `Hierba`:
              if (this.luchador2.getTipo() == `Agua`) {
                efectividad = 2;
              } else if (this.luchador2.getTipo() == `Electrico`) {
                efectividad = 1;
              } else {
                efectividad = 0.5;
              }
              break;
            case `Electrico`:
              if (this.luchador2.getTipo() == `Agua`) {
                efectividad = 2;
              } else if ((this.luchador2.getTipo() == `Fuego`) || (this.luchador2.getTipo() == `Hierba`)) {
                efectividad = 1;
              } else {
                efectividad = 0.5;
              }
              break;
            case `Agua`:
              if (this.luchador2.getTipo() == `Fuego`) {
                efectividad = 2;
              } else {
                efectividad = 0.5;
              }
              break;
          }
        }
        if (this.luchador2 instanceof Marvel) efectividad = 0.5;
        if (this.luchador2 instanceof DC) efectividad = 2;
        if (this.luchador2 instanceof StarWars) efectividad = 2;
        if (this.luchador2 instanceof DragonBall) efectividad = 1;
        break;
      case Marvel:
        if (this.luchador2 instanceof Pokemon) efectividad = 2;
        if (this.luchador2 instanceof Marvel) efectividad = 1;
        if (this.luchador2 instanceof DC) efectividad = 1;
        if (this.luchador2 instanceof StarWars) efectividad = 0.5;
        if (this.luchador2 instanceof DragonBall) efectividad = 2;
        break;
      case DC:
        if (this.luchador2 instanceof Pokemon) efectividad = 0.5;
        if (this.luchador2 instanceof Marvel) efectividad = 1;
        if (this.luchador2 instanceof DC) efectividad = 1;
        if (this.luchador2 instanceof StarWars) efectividad = 2;
        if (this.luchador2 instanceof DragonBall) efectividad = 0.5;
        break;
      case StarWars:
        if (this.luchador2 instanceof Pokemon) efectividad = 0.5;
        if (this.luchador2 instanceof Marvel) efectividad = 2;
        if (this.luchador2 instanceof DC) efectividad = 0.5;
        if (this.luchador2 instanceof StarWars) efectividad = 1;
        if (this.luchador2 instanceof DragonBall) efectividad = 1;
        break;
      case DragonBall:
        if (this.luchador2 instanceof Pokemon) efectividad = 1;
        if (this.luchador2 instanceof Marvel) efectividad = 0.5;
        if (this.luchador2 instanceof DC) efectividad = 2;
        if (this.luchador2 instanceof StarWars) efectividad = 1;
        if (this.luchador2 instanceof DragonBall) efectividad = 1;
        break;
    }
    if (atacante == 1) {
      if (efectividad == 2) efectividad = 0.5;
      if (efectividad == 0.5) efectividad = 2;
      daño = 50 * (this.luchador2.getDatosBasicos().ataque / this.luchador1.getDatosBasicos().defensa) * efectividad;
      return Math.trunc(daño);
    } else {
      daño = 50 * (this.luchador1.getDatosBasicos().ataque / this.luchador2.getDatosBasicos().defensa) * efectividad;
      return Math.trunc(daño);
    }
  }

  /**
   * Funcion start()
   * Simula la pelea mostrando los contrictantes, quien le toca atacar y la vida restante tras un ataque
   * @returns El ganador del combate
   */
  public start() {
    let atacante: number = 0;

    console.log(`Van a luchar ${this.luchador1.getNombre()} y ${this.luchador2.getNombre()}`);
    console.log();
    console.log(`${this.luchador1.getNombre()} tiene ${this.luchador1.getDatosBasicos().hp} de vida`);
    console.log(`${this.luchador2.getNombre()} tiene ${this.luchador2.getDatosBasicos().hp} de vida`);
    console.log();

    while ((this.luchador1.getDatosBasicos().hp > 0) && (this.luchador2.getDatosBasicos().hp > 0)) {
      if (atacante == 0) {
        console.log(`ATACA ${this.luchador1.getNombre()}\n${this.luchador1.getColetilla()}`);
        this.luchador2.setHp((this.luchador2.getDatosBasicos().hp - this.dañoFighter(atacante)));
        console.log(`BOOM ha causado ${this.dañoFighter(atacante)} de daño`);
        console.log(`Vida de ${this.luchador1.getNombre()} restante: ${this.luchador1.getDatosBasicos().hp}`);
        console.log(`Vida de ${this.luchador2.getNombre()} restante: ${this.luchador2.getDatosBasicos().hp}`);
        console.log();
        atacante = 1;
      } else {
        console.log(`ATACA ${this.luchador2.getNombre()}\n${this.luchador2.getColetilla()}`);
        this.luchador1.setHp((this.luchador1.getDatosBasicos().hp - this.dañoFighter(atacante)));
        console.log(`BOOM ha causado ${this.dañoFighter(atacante)} de daño`);
        console.log(`Vida de ${this.luchador1.getNombre()} restante: ${this.luchador1.getDatosBasicos().hp}`);
        console.log(`Vida de ${this.luchador2.getNombre()} restante: ${this.luchador2.getDatosBasicos().hp}`);
        console.log();
        atacante = 0;
      }
    }
    console.log();
    if (this.luchador1.getDatosBasicos().hp < 0) {
      console.log(`GANADOR ${this.luchador2.getNombre()}!!!!!!!`);
      return this.luchador2.getNombre();
    } else {
      console.log(`GANADOR ${this.luchador1.getNombre()}!!!!!!!`);
      return this.luchador1.getNombre();
    }
  }
}
