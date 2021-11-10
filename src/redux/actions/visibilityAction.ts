import { IS_PASSWORD_VISIBLE, IS_CONFIRMPASS_VISIBLE } from "../actionTypes/visibilityTypes";

export const passwordVisibility = () => {
    return { type: IS_PASSWORD_VISIBLE }
}

export const confirmPassVisibility = () => {
    return { type: IS_CONFIRMPASS_VISIBLE }
}