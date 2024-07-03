const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
    password: /^.{4,12}$/, // 4 a 12 dígitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    usuario: false,
    password: false,
    correo: false,
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nameNombre":
            validarCampo(expresiones.nombre, e.target, 'name');
            break;
        case "username":
            validarCampo(expresiones.usuario, e.target, 'username');
            break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        case "reEnterPassword":
            validarPassword2();
            break;
    }
};

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .texto__error`).classList.remove('texto__error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .texto__error`).classList.add('texto__error-activo');
        campos[campo] = false;
    }
};

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('reEnterPassword');
    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById('grupo__reEnterPassword').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__reEnterPassword').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__reEnterPassword i').classList.add('fa-times-circle');
        document.querySelector('#grupo__reEnterPassword i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__reEnterPassword .texto__error').classList.add('texto__error-activo');
        campos['password'] = false;
    } else {
        document.getElementById('grupo__reEnterPassword').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__reEnterPassword').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__reEnterPassword i').classList.remove('fa-times-circle');
        document.querySelector('#grupo__reEnterPassword i').classList.add('fa-check-circle');
        document.querySelector('#grupo__reEnterPassword .texto__error').classList.remove('texto__error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
   e.preventDefault()
    console.log('Formulario enviado');
    console.log(campos)
    console.log(e);
    const terminos = document.getElementById('terminos');
    if (campos.nombre && campos.usuario && campos.password && campos.correo && terminos.checked) {
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        formulario.submit();
    } else {
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-activo');
    }
});
