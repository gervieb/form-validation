import { ValidationType, IS_SIGNUP_VALIDATED, IS_SIGNIN_VALIDATED} from "../actionTypes/validationTypes";
import { IValidation } from "common/interfaces";

const INITIAL_STATE: IValidation = {
    isSignUpValidated: false,
    isSignInValidated: false
}

const validationReducer = (state = INITIAL_STATE, action: ValidationType): IValidation => {
    switch(action.type) {
        case IS_SIGNUP_VALIDATED:
            return {
                ...state,
                isSignUpValidated: action.payload
            }

        case IS_SIGNIN_VALIDATED:
            return {
                ...state,
                isSignInValidated: action.payload
            }

        default: {
            return state
        }
    }
}

export default validationReducer;