import React, { useState, useEffect, FC } from 'react';
import SignInComponent from './SignIn.component';
import { InputEvent, SubmitEvent, ClickEvent } from 'common/types';
import { useDispatch } from 'react-redux';
import { validateEmail, validatePassword, resetErrors } from 'redux/actions/errorAction';
import { isFilled, isErrorFree } from 'utils/helpers';
import { useTypedSelector } from 'hooks/useTypeSelector';
import { signInValidated } from 'redux/actions/validationAction'
import { passwordVisibility } from 'redux/actions/visibilityAction'
import { HistoryProps } from 'common/interfaces';

interface User {
    email: string;
    password: string;
}

const initialState = {
    email: '',
    password: ''
}


const SignIn: FC<HistoryProps> = () => {
    const dispatch = useDispatch()
    const { errors } = useTypedSelector((state) => state)
    const [form, setForm] = useState<User>(initialState)

    useEffect(() => {
        dispatch(resetErrors())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const validateInput = (): void => {
        Object.entries(form).forEach(([key, value]) => !value
            ? validate(key, value) : null)

        if (isFilled(form) && isErrorFree(errors)) {
            dispatch(signInValidated(true))
            setTimeout(() => {
                closeFlashMessage();
                setForm({ ...initialState });
            }, 1500)
        }
    }

    const handleChange = (e: InputEvent): any => {
        const { name, value }: { name: string, value: string } = e.target;
        validate(name, value);
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e: SubmitEvent): any => {
        e.preventDefault();
        validateInput();
    }

    const validate = (name: string, value: string): void => {
        switch (name) {
            case 'email':
                dispatch(validateEmail(value));
                break;

            case 'password':
                dispatch(validatePassword(value));
                break;
            default:
                break;
        }
    }

    const handleVisibility = (e: ClickEvent): void => {
        dispatch(passwordVisibility())
    }

    const closeFlashMessage = () => {
        dispatch(signInValidated(false))
    }

    return (
        <SignInComponent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleVisibility={handleVisibility}
            form={form}
        />
    )
}

export default SignIn;