import React, { useState, useEffect, FC } from 'react';
import SignUpComponent from './SignUp.component';
import { IUser } from 'common/interfaces';
import { InputEvent, SubmitEvent, ClickEvent } from 'common/types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypeSelector';
import { isFilled, isErrorFree } from 'utils/helpers';
import { HistoryProps } from 'common/interfaces';
import { signUpValidated } from 'redux/actions/validationAction'
import { passwordVisibility, confirmPassVisibility } from 'redux/actions/visibilityAction'
import {
    validateEmail,
    validateFullName,
    validatePassword,
    validateConfirmPassword,
    resetErrors
} from 'redux/actions/errorAction';

const SignUp: FC<HistoryProps> = ({ history }) => {
    const dispatch = useDispatch();
    const { errors } = useTypedSelector((state) => state)
    const [form, setForm] = useState<IUser>({
        email: '',
        fullName: '',
        password: '',
        password2: ''
    })

    useEffect(() => {
        dispatch(resetErrors())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (e: InputEvent): any => {
        const { name, value }: { name: string, value: string } = e.target;
        setForm({ ...form, [name]: value })
        validate(name, value);
    }

    const handleSubmit = (e: SubmitEvent): any => {
        e.preventDefault();
        validateInput();
    }

    const handleVisibility = (e: ClickEvent): void => {
        switch (e.currentTarget.dataset.name) {
            case 'password':
                dispatch(passwordVisibility());
                break;

            case 'password2':
                dispatch(confirmPassVisibility());
                break;

            default:
                break;
        }
    }

    const validate = (name: string, value: string): void => {
        switch (name) {
            case 'fullName':
                dispatch(validateFullName(value));
                break;

            case 'email':
                dispatch(validateEmail(value));
                break;

            case 'password':
                dispatch(validatePassword(value));
                break;

            case 'password2':
                dispatch(validateConfirmPassword(form.password, value));
                break;

            default:
                break;
        }
    }

    const validateInput = (): void => {
        Object.entries(form).forEach(([key, value]) => !value
            ? validate(key, value) : null)

        if (isFilled(form) && isErrorFree(errors)) {
            dispatch(signUpValidated(true))

            setTimeout(() => {
                closeFlashMessage();
                reset();
                history.push('/signin')
            }, 1500)
        }
    }


    const closeFlashMessage = () => {
        dispatch(signUpValidated(false))
    }

    const reset = (): void => {
        setForm({
            email: '',
            fullName: '',
            password: '',
            password2: ''
        })
    }

    return (
        <SignUpComponent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleVisibility={handleVisibility}
            form={form}
        />
    )
}

export default SignUp;