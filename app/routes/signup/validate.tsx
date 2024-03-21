import { accountExits } from "./queries";

export const validate = async (email:string, password: string) => {
    // if email and password are empty lets call it an error 
    let errors: { email?: string; password?: string } = {};

    if(!email) {
        errors.email = "Email is required.";
    } else if(!email.includes('@')) {
        errors.email = "Please enter a valid email address."
    }

    if (!password) {
        errors.password = "Password is required."
    } 

    if (!errors.email && (await accountExits(email))){
        errors.email = "An account with this email already exists."
    }

    return Object.keys(errors).length? errors : null
}