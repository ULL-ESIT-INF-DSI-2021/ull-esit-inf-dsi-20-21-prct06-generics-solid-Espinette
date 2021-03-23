
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';

describe(`EJERCICIO 1 - EL COMBATE DEFINITIVO`, () => {
  const Bulbasaur: Pokemon = new Pokemon("Bulbasaur", 6.9, 0.7, "Hierba", [49, 49, 45, 318], "Bulba Bulba!!");
  const Charmander: Pokemon = new Pokemon("Charmander", 8.5, 0.6, "Fuego", [52, 43, 65, 309], "Fire!!");
  const Squirtle: Pokemon = new Pokemon("Squirtle", 9, 0.5, "Agua", [48, 65, 43, 314], "Squidish!!!");
  const Seel: Pokemon = new Pokemon("Seel", 90, 1.1, "Agua", [45, 55, 45, 325], "Boomseel!!");

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
});
