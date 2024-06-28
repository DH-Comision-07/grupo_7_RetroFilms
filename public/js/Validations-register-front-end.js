 // ---------Selección de elementos --------
 window.addEventListener('load',() => {
    const inputs = document.querySelectorAll('input');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    
    //-----Regals de Validación para la contraseña----Expresiones Generales
    
    const passwordRules = {
        length: /(?=.{8,})/,
        uppercase: /(?=.*[A-Z])/,
        lowercase: /(?=.*[a-z])/,
        number: /(?=.*\d)/
    };
    
    // Mensajes de ayuda para la contraseña
    
    const passwordMessages = {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        number: document.getElementById('number')
    };
    
    // Validación en tiempo real de la contraseña
    
    passwordInput.addEventListener('input', function(){
        const password = passwordInput.value;
        for (const [rule, regex] of Object.entries(passwordRules)){
           if(regex.test(password)){
            passwordMessages[rule].classList.remove('invalid');
            passwordMessages[rule].classList.add('valid');
           } else {
            passwordMessages[rule].classList.add('invalid');
            passwordMessages[rule].classList.remove('valid');
           }
        }
    });
    
    // Validar confirmación de contraseña, confirmación de pass 
    function validateConfirmPass(){
    
        const confirmPasswordInput = document.getElementById('confirm_password');
        
        const coincide =  passwordInput.value == confirmPasswordInput.value;
        confirmPasswordInput.classList.toggle('invalid', !coincide);
        confirmPasswordInput.classList.toggle('valid', coincide);
        helpMessageConfirm.classList.toggle('borrarEstilo', !coincide);
        helpMessageConfirm.classList.toggle('visible_item', coincide);
    }
    // Limpiar campos del formulario
    
    confirmPasswordInput.addEventListener('input', validateConfirmPass);
    
    const validationRules = {
        name: (value) => /^[A-Za-z\s]+$/.test(value) && value !== "",
        userName: (value) => /^[A-Za-z\s]+$/.test(value) && value !== "",
        email: (value) => /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i.test(value) && value !== ""
    }
    function validateInput(input){
        const isValid = validationRules[input.id](input.value.trim());
        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid);
        const helpInput = document.getElementById(`help_${input.id}`);
        helpInput.classList.toggle('textDanger', isValid);
    }
    
    let eventosParaValidar = ["blur", "input", "focus"];
    
    inputs.forEach(input =>{
        eventosParaValidar.forEach(evento =>{
            evento.addEventListener(evento, () => validateInput(input));
        });
    });

})

