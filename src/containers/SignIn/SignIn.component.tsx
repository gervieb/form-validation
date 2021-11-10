import React, { FC } from 'react';
import Logo from 'components/Logo/Logo.component';
import { ChildrenProps } from 'common/interfaces'
import { useTypedSelector } from 'hooks/useTypeSelector';
import visible from 'assets/visible.png';
import invisible from 'assets/invisible.png'

import {
    SignInWrapper,
    Container,
    Header,
    Box,
    BackDrop,
    FormWrapper,
    ErrorMessage,
    SuccessMessage,
    Label,
    Input,
    InputWrapper,
    VisibilityWrapper,
    VisibilityIcon,
    Button,
    Text,
    StyledLink
} from 'style';

export const SignIn: FC<ChildrenProps> = props => {
    const { handleChange, handleSubmit, handleVisibility, form } = props
    const { emailError, passwordError } = useTypedSelector((state) => state.errors)
    const { isSignInValidated } = useTypedSelector((state) => state.isValidated)
    const { isPasswordVisible } = useTypedSelector((state) => state.isVisible)

    return (
        <SignInWrapper>
            <Container>
                <Logo />
                <Header>Sign in</Header>
                <Box>
                    <BackDrop />
                    <FormWrapper onSubmit={handleSubmit}>
                        <InputWrapper>
                            <Label htmlFor='email'>Email Address</Label>
                            <Input name='email' type='text' value={form.email} placeholder='Enter Email' onChange={handleChange} />
                        </InputWrapper>
                        <ErrorMessage>{emailError}</ErrorMessage>
                        <InputWrapper>
                            <Label htmlFor='password'>Password</Label>
                            <Input name='password' type={isPasswordVisible ? 'text' : 'password'} value={form.password} placeholder='Enter Password' onChange={handleChange} />
                            {form.password.length > 0 ?
                                <VisibilityWrapper>
                                    {isPasswordVisible
                                        ? <VisibilityIcon src={invisible} alt="invisible icon" onClick={handleVisibility} />
                                        : <VisibilityIcon src={visible} alt="visible icon" onClick={handleVisibility} />
                                    }
                                </VisibilityWrapper> : null
                            }
                        </InputWrapper>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                        <Button type='submit'>Continue</Button>
                        {isSignInValidated
                            ? <SuccessMessage>Successfully log in! </SuccessMessage>
                            : ''
                        }
                    </FormWrapper>
                </Box>
                <Text>Not a member yet? <StyledLink to='/signup'>Click here to create an account</StyledLink></Text>
            </Container>
        </SignInWrapper>
    )
}

export default SignIn;