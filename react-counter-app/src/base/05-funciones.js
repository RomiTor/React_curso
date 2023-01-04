
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
        uid: 'ABC123',
        username: 'Mina_Rock0812'
});

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
});

