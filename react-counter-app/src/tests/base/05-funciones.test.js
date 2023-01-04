import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        //Arrange
        const userTest = {
            uid: 'ABC123',
            username: 'Mina_Rock0812'
        }

        //Act
        const user = getUser();
        
        //Assert
        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        //Arrange
        const nombre = 'Tomás';

        //Act
        const user = getUsuarioActivo(nombre);

        //Assert
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    });
});
