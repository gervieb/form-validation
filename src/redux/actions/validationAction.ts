import { IS_SIGNUP_VALIDATED, IS_SIGNIN_VALIDATED } from "../actionTypes/validationTypes";

export const signUpValidated = ( bool: boolean ) => {
    return { type: IS_SIGNUP_VALIDATED, payload: bool }
}

export const signInValidated = ( bool: boolean ) => {
    return { type: IS_SIGNIN_VALIDATED, payload: bool }
}
