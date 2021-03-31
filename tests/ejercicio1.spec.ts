
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {DC} from '../src/ejercicio-1/dc';
import {StarWars} from '../src/ejercicio-1/starWars';
import {DragonBall} from '../src/ejercicio-1/dragonBall';
import {Marvel} from '../src/ejercicio-1/marvel';
import {FighterCollection} from '../src/ejercicio-1/fighterColleccion';
import {MostrarFighterCollection} from '../src/ejercicio-1/mostrarFighterColleccion';
import {Combat} from '../src/ejercicio-1/combat';


describe(`EJERCICIO 1 - EL COMBATE DEFINITIVO`, () => {
  const Bulbasaur: Pokemon = new Pokemon("Bulbasaur", 6.9, 0.7, "Hierba", [49, 49, 45, 318], "Bulba Bulba!!");
  const Charmander: Pokemon = new Pokemon("Charmander", 8.5, 0.6, "Fuego", [52, 43, 65, 309], "Fire!!");
  const Squirtle: Pokemon = new Pokemon("Squirtle", 9, 0.5, "Agua", [48, 65, 43, 314], "Squidish!!!");
  const Seel: Pokemon = new Pokemon("Seel", 90, 1.1, "Agua", [45, 55, 45, 325], "Boomseel!!");
  const Luke: StarWars = new StarWars("Luke", 58, 1.75, "Jedi", [57, 47, 35, 400], "Que la fuerza este contigo");
  const DarthVader: StarWars = new StarWars("Darth Vader", 70, 1.82, "Sith", [70, 55, 29, 285], "Yo soy tu padre");
  const Thanos: Marvel = new Marvel("Thanos", 448, 2.62, "Villano", [110, 80, 55, 1000], "Yo soy inebitable");
  const Goku: DragonBall = new DragonBall("Goku", 62, 1.75, "Heroe", [85, 62, 57, 600], "Todos confian en mi, no puedo perder ahora");
  const Vegeta: DragonBall = new DragonBall("Vegeta", 56, 1.64, "Heroe", [83, 68, 49, 550], "Toma esta!!!");
  const Thor: Marvel = new Marvel("Thor", 98, 1.90, "Vengador", [95, 62, 58, 520], "Por Asgard!!!!");
  const Joker: DC = new DC("Joker", 78, 1.73, "Villano", [35, 39, 25, 250], "JA JA JA JA");
  const SuperMan: DC = new DC("Super Man", 95, 1.85, "Krypton", [100, 95, 80, 750], "Yo soy SUPERMAN");

  const BaseDeDatos = new FighterCollection([Bulbasaur, Vegeta, SuperMan, Thanos, Thor, DarthVader, Charmander, Squirtle, Joker, Seel, Luke]);
  const BaseDeDatosPrint = new MostrarFighterCollection(BaseDeDatos);
  describe('Probar llamadas a un objeto de la clase Pokemon hija de Fighter', () => {
    it('Bulbasaur.getNombre() returns value Bulbasur', () => {
      expect(Bulbasaur.getNombre()).to.be.equal(`Bulbasaur`);
    });

    it('Bulbasaur.getAltura() returns value 0.7', () => {
      expect(Bulbasaur.getAltura()).to.be.equal(0.7);
    });

    it('Bulbasaur.getPeso() returns value 6.9', () => {
      expect(Bulbasaur.getPeso()).to.be.equal(6.9);
    });

    it('Bulbasaur.getTipo() returns value Hierba', () => {
      expect(Bulbasaur.getTipo()).to.be.equal('Hierba');
    });

    it('Bulbasaur.getDatosBasicos().ataque returns value 49', () => {
      expect(Bulbasaur.getDatosBasicos().ataque).to.be.equal(49);
    });

    it('Bulbasaur.getDatosBasicos().defensa returns value 49', () => {
      expect(Bulbasaur.getDatosBasicos().defensa).to.be.equal(49);
    });

    it('Bulbasaur.getDatosBasicos().velocidad returns value 45', () => {
      expect(Bulbasaur.getDatosBasicos().velocidad).to.be.equal(45);
    });

    it('Bulbasaur.getDatosBasicos().hp returns value 318', () => {
      expect(Bulbasaur.getDatosBasicos().hp).to.be.equal(318);
    });

    it('Bulbasaur.getColetilla() returns value Bulba Bulba!!', () => {
      expect(Bulbasaur.getColetilla()).to.be.equal("Bulba Bulba!!");
    });
  });

  describe('Probar llamadas al resto de clases de otros universos', () => {
    it('Crear un objeto del universo Marvel', () => {
      expect(Thanos).to.not.be.equal(null);
    });

    it('Crear un objeto del universo DC', () => {
      expect(SuperMan).to.not.be.equal(null);
    });

    it('Crear un objeto del universo Dragon Ball', () => {
      expect(Goku).to.not.be.equal(null);
    });

    it('Crear un objeto del universo Star Wars', () => {
      expect(Luke).to.not.be.equal(null);
    });
  });

  describe('Probar funcionamiento clase FighterCollection', () => {
    it('Crear un objeto de FighterCollection', () => {
      expect(BaseDeDatos).to.not.be.equal(null);
    });

    describe('Añadimos a Goku a la Base de datos', () => {
      it('Lo buscamos primero y se espera que no se encuentre', () => {
        expect(BaseDeDatos.findFighter(Goku)).to.be.equal('No se encuentra al personaje en la base de datos');
      });

      it('Lo añadimos y se espera que se encuentre', () => {
        BaseDeDatos.addFighter(Goku);
        expect(BaseDeDatos.findFighter(Goku)).to.be.equal('Goku se ha encontrado en la posicion 11');
      });
    });
    describe('Clase exclusiva para imprimir la base de datos', () => {
      it('Mostramos la colección', () => {
        BaseDeDatosPrint.mostrarPersonajes();
      });
    });
  });

  describe('Probar funcionamiento clase Combate', () => {
    const combat1 = new Combat(SuperMan, Thor);
    const combat2 = new Combat(Bulbasaur, Goku);

    it('LLamada para obtener luchadores correctamente se espera Los contricantes son Super Man y Thor', () => {
      expect(combat1.getCombate()).to.be.equal('Los contricantes son Super Man y Thor');
    });
    it('Comabte entre Superman y Thor', () => {
      combat1.start();
    });
    it('Comabte entre Bulbasaur y Goku', () => {
      combat2.start();
    });
  });
});
