function mostrarResultado(resultado){
    document.getElementById('display').value = resultado;
}

function suma(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 + numero2);
}

function resta(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 - numero2);
}

function divi(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 / numero2);
}

function multiplicador(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 * numero2);
}

function raiz(){
    let numero1 = +document.getElementById('num1').value;
    mostrarResultado(numero1 >= 0 ? Math.sqrt(numero1) : "Error: Raíz cuadrada de número negativo");
}

function potenciador(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(Math.pow(numero1, numero2));
}

function borrador(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('display').value = '';
}
