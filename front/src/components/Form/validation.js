
function validation(inputs) {
    // { username: --- , password: --- }
    
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = new RegExp("[0-9]");
    const errors = {};
    
    if(!regexEmail.test(inputs.username)) {
        errors.username = "El username debe ser un email válido!";
    }
    if(!inputs.username){
        errors.username = "El username es obligatorio!";
    }
    if(inputs.username.length > 35){
        errors.username = "Máximo 35 caracteres!";
    }
    if(!regexPass.test(inputs.password)) {
        errors.password = "Al menos un número!";
    }
    if(inputs.password.length < 6 || inputs.password.length > 10 ){
        errors.password = "Entre 6 y 10 caracteres!";
    }

    return errors;
}

export default validation; 