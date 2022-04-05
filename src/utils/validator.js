const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;

const validator = (type, value) => {
    switch(type) {
        case 'email':
            if(formatEmail.test(value)) {
                return {
                    error: ''
                }
            }
            return {
                error: 'formato de email no valido, ej: user@gmail.com',
                value
            }
        case 'password':
            if(value.length >= minPasswordLength) {
                return {
                    error: ''
                }
            }
            return {
                error: `la contraseña debe tener al menos ${minPasswordLength} caracteres`,
                value
            }
        default:
            return {
                error: '',
                value
            }
    }
}

export default validator;