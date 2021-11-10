import { InputEvent, SubmitEvent, ClickEvent } from "./types";
import { History } from 'history';

export interface IUser {
    email: string
    fullName?: string
    password: string
    password2?: string;
}

export interface ChildrenProps {
    handleChange: (e: InputEvent) => any;
    handleSubmit: (e: SubmitEvent) => any;
    handleVisibility: (e: ClickEvent) => void;
    form: {
        email: string,
        fullName?: string,
        password: string,
        password2?: string,
    }
}

export interface IErrors {
    nameError: string
    emailError: string
    passwordError: string
    confirmPasswordError: string
}


export interface IValidation {
    isSignUpValidated: boolean,
    isSignInValidated: boolean
}


export interface HistoryProps {
    history : History
}

export interface IVisiblity {
    isPasswordVisible: boolean,
    isConfirmPassVisible: boolean
}
