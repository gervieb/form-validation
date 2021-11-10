import { ChangeEvent, FormEvent, MouseEvent } from 'react';

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type SubmitEvent = FormEvent<HTMLFormElement>
export type ClickEvent = MouseEvent<HTMLElement>
export type IValidated = boolean;