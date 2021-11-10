import { IVisiblity } from "../../common/interfaces";
import { VisibilityType, IS_PASSWORD_VISIBLE, IS_CONFIRMPASS_VISIBLE } from "../actionTypes/visibilityTypes";

const INITIAL_STATE: IVisiblity = {
    isPasswordVisible: false,
    isConfirmPassVisible: false,
}

const visibilityReducer = (state = INITIAL_STATE, action: VisibilityType): IVisiblity => {
    switch(action.type) {
        case IS_PASSWORD_VISIBLE:
            return {
                ...state,
                isPasswordVisible: !state.isPasswordVisible
            }
        
            case IS_CONFIRMPASS_VISIBLE:
            return {
                ...state,
                isConfirmPassVisible: !state.isConfirmPassVisible
            }

        default: {
            return state
        }
    }
}

export default visibilityReducer;