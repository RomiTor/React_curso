import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('Debe retornar valores por defecto', () => {
        //Arrange
        const { result } = renderHook( () =>  useCounter() );

        //Act and Assert
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    })

    test('Debe tener el counter en 100', () => {
        //Arrange
        const { result } = renderHook( () =>  useCounter(100) );

        //Act and Assert
        expect( result.current.counter ).toBe(100);
    })
    
    test('Debe incrementar el counter en 1', () => {
        //Arrange
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        //Act
        act( () => {

            increment();
        });

        //Assert
        const { counter } = result.current;
        expect( counter ).toBe(101);
    })

    test('Debe decrementar el counter en 1', () => {
        //Arrange
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        //Act
        act( () => {

            decrement();
        });

        //Assert
        const { counter } = result.current;
        expect( counter ).toBe(99);

    })

    test('Debe establecer el valor en 100', () => {
        //Arrange
        const { result } = renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;

        //Act
        act( () => {
            
            decrement();
            reset();
        });

        //Assert
        const { counter } = result.current;
        expect( counter ).toBe(100);

    })
    
})
