export const IS_PASSWORD_VISIBLE = 'IS_PASSWORD_VISIBLE';
export const IS_CONFIRMPASS_VISIBLE = 'IS_CONFIRMPASS_VISIBLE';

export type VisibilityType = { type: typeof IS_PASSWORD_VISIBLE } 
| { type: typeof IS_CONFIRMPASS_VISIBLE }