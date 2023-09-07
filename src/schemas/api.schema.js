import {z} from 'zod';
//Esquema de validación para el registro
export const registerSchema = z.object({
    username: z.string({
        required_error: "El usuario es requerido",
    }),
    email: z.string({
        required_error: "El email es requerido",
    }).email({
        message: "email invalido",
    }),
    password: z.string({
        required_error: "Contraseña requerida",
    }).min(6, {
        message: "La contraseña debe ser de almenos 6 caracteres",
    }),
});

//Esquema de validación para el login

export const loginSchema = z.object({
    email: z.string({
        required_error: "El email es requerido",
    }).email({
        message: "email invalido",
    }),
    password: z.string({
        required_error: "Contraseña requerida",
    }).min(6, {
        message: "La contraseña debe ser de almenos 6 caracteres",
    }),
});