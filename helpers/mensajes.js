require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('===================================='.green);
        console.log('        Seleccione una opción'.green);
        console.log('====================================\n'.green);
    
        console.log(`${ '1.'.green } Crear una tarea`);
        console.log(`${ '2.'.green } Mostrar las tareas`);
        console.log(`${ '3.'.green } Mostrar las tareas completadas`);
        console.log(`${ '4.'.green } Mostrar las tareas pendientes`);
        console.log(`${ '5.'.green } Completar tareas`);
        console.log(`${ '6.'.green } Borrar una tarea`);
        console.log(`${ '0.'.green } Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Selecciona una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });
}

const pausa = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });

    });

}

module.exports = { 
    mostrarMenu,
    pausa
}