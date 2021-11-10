export const VALIDATE_FULLNAME = 'VALIDATE_FULLNAME';
export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';
export const VALIDATE_PASSWORD = 'VALIDATE_PASSWORD';
export const VALIDATE_CONFIRM_PASSWORD= 'VALIDATE_CONFIRM_PASSWORD';
export const RESET_ERRORS = "RESET_ERRORS"

export type ActionTypes = { type: typeof VALIDATE_EMAIL, payload: string }
  | { type: typeof VALIDATE_FULLNAME, payload: string }
  | { type: typeof VALIDATE_PASSWORD, payload: string }
  | { type: typeof VALIDATE_CONFIRM_PASSWORD, payload: { password: string, value: string } }
  | { type: typeof RESET_ERRORS }