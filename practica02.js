// Parte1: https://www.youtube.com/watch?v=cEKDyzoTXb4
// Parte2: https://www.youtube.com/watch?v=s3pC93LgP18
// Repositorio : https://github.com/falconmasters/formulario-css-grid/tree/codigo_base

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)) {
                document.getElementById(`grupo__usuario`).classList.remove('formulario__grupo-incorrecto');
		        document.getElementById(`grupo__usuario`).classList.add('formulario__grupo-correcto');
		        document.querySelector(`#grupo__usuario i`).classList.add('fa-check-circle');
		        document.querySelector(`#grupo__usuario i`).classList.remove('fa-times-circle');
                document.querySelector(`#grupo__usuario .formulario__input-error`).classList.remove('formulario__input-error-activo');
            } else {
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
                document.querySelector(`#grupo__usuario i`).classList.add('fa-times-circle');
		        document.querySelector(`#grupo__usuario i`).classList.remove('fa-check-circle');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    };
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    
});



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

