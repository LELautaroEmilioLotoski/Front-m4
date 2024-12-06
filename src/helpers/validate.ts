
const regex = {
    username: /^[a-zA-Z0-9._-]{3,16}$/,
    address: /^[A-Za-z0-9\s]+$/,
    phone: /^\d+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}

interface RegisterInput {
    name: string;
    address: string;
    phone: string;
    password: string;
    email: string
  }

  interface LoginInput {
    email: string;
    password: string;
  }

export const validateRegister = (input: RegisterInput) => {
    const errors = {
        name: "",
        address: "",
        phone: "",
        email: "",
        password: ""
    }

    if(!regex.username.test(input.name)){
        errors.email = "Nombre de usuario inválido"
    }

    if(!regex.password.test(input.password)){
        errors.password = "La contraseña debe tener al menos 8 caracteres, una letra y un número"
    }
    if(!regex.address.test(input.address)){
        errors.address = "La dirección debe contener solo letras y numeros"
    }
    if(!regex.phone.test(input.phone)){
        errors.phone = "El numero de telefono debe ser válido"
    }
    return errors;
}

export const validateLogin = (input: LoginInput) => {
    const errors = {
        name: "",
        address: "",
        phone: "",
        email: "",
        password: ""
    }

    if(!regex.username.test(input.email)){
        errors.email = "Correo Inválido"
    }

    if(!regex.password.test(input.password)){
        errors.password = "La contraseña debe tener al menos 8 caracteres, una letra y un número"
    }

    return errors;
}