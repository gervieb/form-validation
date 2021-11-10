import { IUser, IErrors } from 'common/interfaces'

export const isFilled = (form: IUser) : boolean => {
    return Object.entries(form).every(([key, value]) => value)
}

export const isErrorFree = (errors: IErrors) : boolean => {
    return Object.entries(errors).every(([key, value]) => !value)
}