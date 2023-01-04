import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Héroes', () => {

    test('debe retornar un héroe por id', () => {

        //Arrange
        const id = 1;

        //Act
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);

        //Assert
        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar undefined si héroe no existe', () => {

        //Arrange
        const id = 10;

        //Act
        const heroe = getHeroeById(id);

        //Assert
        expect(heroe).toBe(undefined);
    });

    //debe retornar un arreglo con los héroes de DC
    //owner
    //toEqual al arreglo filtrado
    test('debe retornar un arreglo con los héroes de DC', () => {

        //Arrange
        const owner = 'DC';

        //Act
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(heroes => heroes.owner === owner);

        //Assert
        expect(heroes).toEqual(heroesData);
    });

    //debe retornar un arreglo con los héroes de Marvel
    //length = 2 
    //toBe
    test('debe retornar un arreglo con los héroes de Marvel', () => {

        //Arrange
        const owner = 'Marvel';

        //Act
        const heroes = getHeroesByOwner(owner);

        //Assert
        expect(heroes.length).toBe(2);
    });
});