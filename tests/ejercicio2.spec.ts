import 'mocha';
import {expect} from 'chai';
import {Velocidad} from '../src/ejercicio-2/velocidad';
import {Masa} from '../src/ejercicio-2/masa';
import {Longitud} from '../src/ejercicio-2/longitud';
import {Tiempo} from '../src/ejercicio-2/tiempo';
import {Temperatura} from '../src/ejercicio-2/temperatura';
import {Fuerza} from '../src/ejercicio-2/fuerza';
import {Volumen} from '../src/ejercicio-2/volumen';


describe(`EJERCICIO 2 - CONVERSOR DE UNIDADES`, () => {
  const velocidad1 = new Velocidad(100, "Millas/h", "Km/h");
  const velocidad2 = new Velocidad(80, "Km/h", "m/s");
  const fuerza1 = new Fuerza(45, "Newton", "Dina");
  const fuerza2 = new Fuerza(2, "Kilopondio", "Dina");
  const masa1 = new Masa(30, "Libra", "Onza");
  const masa2 = new Masa(50, "Libra", "Kilogramo");
  const longitud1 = new Longitud(23, "Milla", "Yarda");
  const longitud2 = new Longitud(45, "Kilometro", "Milla");
  const temperatura1 = new Temperatura(20, "Celcius", "Fahrenheit");
  const temperatura2 = new Temperatura(280, "Kelvin", "Celcius");
  const tiempo1 = new Tiempo(280, "Hora", "Minuto");
  const tiempo2 = new Tiempo(52000, "Segundo", "Hora");
  const volumen1 = new Volumen(500, "Pie Cubico", "Litro");
  const volumen2 = new Volumen(220, "Galon", "Litro");

  describe(`Prueba conversor velocidad`, () => {
    it('100 millas/hora = 160.934 Km/hora', () => {
      expect(velocidad1.conversor()).to.be.equal(160.934);
    });
    it('80 km/hora = 22.222240000000003 Km/hora', () => {
      expect(velocidad2.conversor()).to.be.equal(22.222240000000003);
    });
  });

  describe(`Prueba conversor fuerza`, () => {
    it('45 Newton = 4.5e+6 Dina', () => {
      expect(fuerza1.conversor()).to.be.equal(4.5e+6);
    });
    it('2 kilopondios = 1.961e+6 Dina', () => {
      expect(fuerza2.conversor()).to.be.equal(1.96133e+6);
    });
  });

  describe(`Prueba conversor masa`, () => {
    it('30 Libras = 480 Onza', () => {
      expect(masa1.conversor()).to.be.equal(480);
    });
    it('50 Libras = 22.6796 Kilogramo', () => {
      expect(masa2.conversor()).to.be.equal(22.6796);
    });
  });

  describe(`Prueba conversor longitud`, () => {
    it('23 Millas = 40480 Yardas', () => {
      expect(longitud1.conversor()).to.be.equal(40480);
    });
    it('45 Kilometros = 27.961695 Millas', () => {
      expect(longitud2.conversor()).to.be.equal(27.961695);
    });
  });

  describe(`Prueba conversor temperatura`, () => {
    it('20 celcius = 68 Fahrenheit', () => {
      expect(temperatura1.conversor()).to.be.equal(68);
    });
    it('280 Kelvin = 6.85 Celcius', () => {
      expect(temperatura2.conversor()).to.be.equal(6.850000000000023);
    });
  });

  describe(`Prueba conversor tiempo`, () => {
    it('280 Horas = 16800 Minutos', () => {
      expect(tiempo1.conversor()).to.be.equal(16800);
    });
    it('52000 Segundos = 14.444456 Horas', () => {
      expect(tiempo2.conversor()).to.be.equal(14.444456);
    });
  });

  describe(`Prueba conversor volumen`, () => {
    it('500 Pies Cubicos = 14158.4 Litros', () => {
      expect(volumen1.conversor()).to.be.equal(14158.4);
    });
    it('220 Galones = 1000.14 Litros', () => {
      expect(volumen2.conversor()).to.be.equal(1000.1398);
    });
  });
});
