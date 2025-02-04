import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message:'Too Short'}),

    username: z.string().min(2,{message:'Invalid email'}),

    email: z.string().email(),

    password: z.string().min(8,{message: 'Password Must be atleast 8 characters'}),


})

export const SigninValidation = z.object({
    
    email: z.string().email(),

    password: z.string().min(8,{message: 'Password Must be atleast 8 characters'}),


})