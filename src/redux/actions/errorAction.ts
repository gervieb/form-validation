import { 
    VALIDATE_FULLNAME, 
    VALIDATE_EMAIL, 
    VALIDATE_PASSWORD, 
    VALIDATE_CONFIRM_PASSWORD,
    RESET_ERRORS
} from "../actionTypes/errorTypes"

export const validateFullName = (value: string)  => ({
    type: VALIDATE_FULLNAME, payload: value 
})

export const validateEmail = (value: string) => ({
    type: VALIDATE_EMAIL, payload: value
})

export const validatePassword = (value: string) => ({
    type: VALIDATE_PASSWORD, payload: value
})

export const validateConfirmPassword = (password: string, value: string) => ({
    type: VALIDATE_CONFIRM_PASSWORD, payload: { password, value }
})

export const resetErrors = () => ({
    type: RESET_ERRORS
})