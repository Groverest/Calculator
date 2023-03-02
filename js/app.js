window.addEventListener('load', () => {  /*Escuchamos cuando se carga el js para evitar que se cargue antes que el HTML*/

        // Creamos las contantes y obtenemos los elementos que necesitamos
        const display =document.querySelector('.calculator-display');
        const keypadButtons =document.getElementsByClassName('keypadButton');
        
        // Creamos otra constante para iterar el keypadButtons como un arreglo
        const keypadButtonArray = Array.from(keypadButtons);

        // Iteramos para obtener lo que hay dentro de cada elemento en el HTML
        keypadButtonArray.forEach( button => {
            button.addEventListener('click', () =>{
                calculadora(display, button);
            })
        })
})

function calculadora(display, button){
    switch (button.innerHTML) {
        case 'C':
                borrar(display);
            break;

        case '=' :
                calcular(display);
            break;

            default:
                
                actualizar(display, button);
                break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0
}