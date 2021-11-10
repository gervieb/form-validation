import { 
    ActionTypes,
    VALIDATE_FULLNAME, 
    VALIDATE_EMAIL,
    VALIDATE_PASSWORD, 
    VALIDATE_CONFIRM_PASSWORD,
    RESET_ERRORS
} from "../actionTypes/errorTypes"

import { IErrors } from 'common/interfaces'

const INITIAL_STATE: IErrors = {
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
};

const errorReducer = (state = INITIAL_STATE, action: ActionTypes) : IErrors => {
    switch(action.type) {
        case VALIDATE_EMAIL:

            return {
                ...state, 
                emailError: action.payload.length < 1 
                        ? 'Email is required' 
                        : !(/\S+@\S+\.\S+/).test(action.payload) 
                        ? 'Email is not valid' 
                        : ''
            }
        
        case VALIDATE_FULLNAME:

            return {
                ...state, 
                nameError: action.payload.length < 1 
                        ? 'Name is required' 
                        : !(/^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$/).test(action.payload) 
                        ? 'Missing last name' 
                        : ''
            }
        
        case VALIDATE_PASSWORD:

            return {
                ...state, 
                passwordError: action.payload.length < 1 
                        ? 'Password is required'
                        : action.payload.length < 8
                        ? 'Password is too short!'
                        : ''
            }
        
        case VALIDATE_CONFIRM_PASSWORD:

            return {
                ...state, 
                confirmPasswordError: 
                        action.payload.value.length < 1
                        ? 'Please confirm your password'
                        : action.payload.password !== action.payload.value
                        ? "Password don't match"
                        : ''
            }
        
        case RESET_ERRORS:

            return INITIAL_STATE;

        default:
            return state;
    }
}

export default errorReducer;