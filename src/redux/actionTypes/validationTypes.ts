export const IS_SIGNUP_VALIDATED = 'IS_SIGNUP_VALIDATED';
export const IS_SIGNIN_VALIDATED = 'IS_SIGNIN_VALIDATED';

export type ValidationType = { type: typeof IS_SIGNUP_VALIDATED, payload: boolean } 
| { type: typeof IS_SIGNIN_VALIDATED, payload: boolean } 