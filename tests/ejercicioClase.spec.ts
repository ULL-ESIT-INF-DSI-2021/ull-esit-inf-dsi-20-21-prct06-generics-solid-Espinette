import 'mocha';
import {expect} from 'chai';
import {ImperialLenght} from "../src/ejercicio-Clase/imperialLength";
import {MetricLenght} from "../src/ejercicio-Clase/metricLength";
import {AdapterLenght} from "../src/ejercicio-Clase/adapter";


describe(`EJERCICIO CLASE`, () => {
  const lenghtImperial = new ImperialLenght();
  lenghtImperial.setLenghtByMillas(5);
  const lenghtMetric = new MetricLenght(3);
  const lenghtAdapter = new AdapterLenght(lenghtImperial);

  describe('Clase imperialLenght', () => {
    describe('Probande los gets de las distintas unidades de medida', () => {
      it('Get Millas returns value 5', () => {
        expect(lenghtImperial.getLenghtByMillas()).to.be.equal(5);
      });
      it('Get Yardas returns value 8800', () => {
        expect(lenghtImperial.getLenghtByYardas()).to.be.equal(8800);
      });
      it('Get Pies returns value 26400', () => {
        expect(lenghtImperial.getLenghtByPies()).to.be.equal(26400);
      });
      it('Get Pulgadas returns value 316800', () => {
        expect(lenghtImperial.getLenghtByPulgadas()).to.be.equal(316800);
      });
    });
  });
  describe('Clase metricLenght', () => {
    describe('Probande los gets de las distintas unidades de medida', () => {
      it('Get Kilometros returns value 3', () => {
        expect(lenghtMetric.getLenghtByKilometros()).to.be.equal(3);
      });
      it('Get Metros returns value 3000', () => {
        expect(lenghtMetric.getLenghtByMetros()).to.be.equal(3000);
      });
      it('Get Centimetros returns value 300000', () => {
        expect(lenghtMetric.getLenghtByCentimetros()).to.be.equal(300000);
      });
    });
  });
  describe('Clase adapterLenght', () => {
    describe('Probande los gets de las distintas unidades de medida', () => {
      it('Get Kilometros returns value 8.0467', () => {
        expect(lenghtAdapter.getLenghtByKilometros()).to.be.equal(8.0467);
      });
      it('Get Metros returns value 8046.7', () => {
        expect(lenghtAdapter.getLenghtByMetros()).to.be.equal(8046.7);
      });
      it('Get Centimetros returns value 80467', () => {
        expect(lenghtAdapter.getLenghtByCentimetros()).to.be.equal(804670);
      });
    });
  });
});
