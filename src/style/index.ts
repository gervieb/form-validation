import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const defaultColor = css`
    color: #58391C;
`
export const SignInWrapper = styled.div`
    margin: 2% 5%;
`;

export const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const Header = styled.h1`
    text-align: center;
    ${defaultColor}
`

export const Box = styled.div`
    position: relative;
    width: 420px;
    margin: 0 auto;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    
`

export const FormWrapper = styled.form`  
    color: #fff;   
    display: flex;
    flex-direction: column;
    justify-content: center;  
    padding: 30px 50px     
`;

export const BackDrop = styled.div`
    width: 100%;
    height: 90px;
    background: #FAD586;
`;

export const InputWrapper = styled.div`
    position: relative;
    margin-top: 5px;
`

export const Label = styled.label`
    ${defaultColor}
    margin: 10px 0;
    font-weight: 600;
    font-size: 1.1rem;
`

export const Input = styled.input`
    width: 100%;
    margin: 5px 0px 10px 0px;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #58391C;
    outline: none;

    &:placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:focus {
        outline: none;
        border: 1px solid transparent;;
        border-bottom: 1px solid #F0A500;
    }
`
export const VisibilityWrapper = styled.div`
    position: absolute;
    top: 52%;
    right: 5%;
`

export const VisibilityIcon = styled.img`
    width: 20px;
    height: 20px;  
`

export const Button = styled.button`
    width: 50%;
    margin: 15px auto;
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background-color: #58391C;

    &:hover {
        filter: brightness(70%);
    }
`

export const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
`

export const SuccessMessage = styled.span`
    color: green;
    font-size: 14px;
    padding-left: 10px;
`

export const Text = styled.p`
    text-align: center;
    padding-top: 20px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #007aff;

    &:active {
        color: #F78812;
    }
`