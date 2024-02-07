const form = document.getElementById('form-pract');

function validarFormulario(campoA, campoB) {
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    if (campoB > campoA) {
        return true; 
    } else {
        return false; 
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;

    const mensagemSucesso = 'O formulário está válido!';
    const formValido = validarFormulario(campoA, campoB);

    if (formValido) {
        alert(mensagemSucesso);
    } else {
        alert("Formulário Inválido!");
    }
});


