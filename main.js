const form = document.getElementById('formulario');

function validaNumero( num1, num2){
    return num2 > num1;
}

form.addEventListener('submit', function(e) {
    let resultado = false;
    e.preventDefault();

    const numeroA = parseFloat(document.getElementById('num-1').value);
    const numeroB = parseFloat(document.getElementById('num-2').value);

    resultado = validaNumero(numeroA, numeroB);
    if(resultado){
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        document.getElementById('num-1').value = '';
        document.getElementById('num-2').value = '';
    }else{
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }

});