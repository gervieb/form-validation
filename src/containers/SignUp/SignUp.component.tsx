import React, { FC } from 'react';
import Logo from 'components/Logo/Logo.component';
import { ChildrenProps } from 'common/interfaces'
import { useTypedSelector } from 'hooks/useTypeSelector';
import visible from 'assets/visible.png';
import invisible from 'assets/invisible.png'
import {
    SignInWrapper as SignUpWrapper,
    Container,
    Header,
    BackDrop,
    Box,
    FormWrapper,
    Label,
    Input,
    InputWrapper,
    VisibilityWrapper,
    VisibilityIcon,
    ErrorMessage,
    SuccessMessage,
    Button,
    Text,
    StyledLink
} from 'style';

const SignUpComponent: FC<ChildrenProps> = props => {
    const { handleChange, handleSubmit, handleVisibility, form } = props as ChildrenProps;
    const { nameError, emailError, passwordError, confirmPasswordError } = useTypedSelector((state) => state.errors);
    const { isSignUpValidated } = useTypedSelector((state) => state.isValidated);
    const { isPasswordVisible, isConfirmPassVisible } = useTypedSelector((state) => state.isVisible)

    return (
        <SignUpWrapper>
            <Container>
                <Logo />
                <Header>Sign up</Header>
                <Box>
                    <BackDrop />
                    <FormWrapper onSubmit={handleSubmit}>
                        <InputWrapper>
                            <Label htmlFor='email'>Email Address</Label>
                            <Input name='email' value={form.email} placeholder='Enter Email' onChange={handleChange} />
                        </InputWrapper>
                        <ErrorMessage>{emailError}</ErrorMessage>
                        <InputWrapper>
                            <Label htmlFor='fullName'>Full name</Label>
                            <Input name='fullName' type='text' value={form.fullName} placeholder='Enter Full Name' onChange={handleChange} />
                        </InputWrapper>
                        <ErrorMessage>{nameError}</ErrorMessage>
                        <InputWrapper>
                            <Label htmlFor='password'>Password</Label>
                            <Input name='password' type={isPasswordVisible ? 'text' : 'password'} value={form.password} placeholder='Enter Password' onChange={handleChange} />
                            {form.password.length > 0 ?
                                <VisibilityWrapper>
                                    {isPasswordVisible
                                        ? <VisibilityIcon src={invisible} data-name="password" alt="invisible icon" onClick={handleVisibility} />
                                        : <VisibilityIcon src={visible} data-name="password" alt="visible icon" onClick={handleVisibility} />
                                    }
                                </VisibilityWrapper> : null
                            }
                        </InputWrapper>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                        <InputWrapper>
                            <Label htmlFor='password2'>Confirm your password</Label>
                            <Input name='password2' type={isConfirmPassVisible ? 'text' : 'password'} value={form.password2} placeholder='Confirm your password' onChange={handleChange} />
                            {form.password2 && form.password2.length > 0 ?
                                <VisibilityWrapper>
                                    {isConfirmPassVisible
                                        ? <VisibilityIcon src={invisible} data-name="password2" alt="invisible icon" onClick={handleVisibility} />
                                        : <VisibilityIcon src={visible} data-name="password2" alt="visible icon" onClick={handleVisibility} />
                                    }
                                </VisibilityWrapper> : null
                            }
                        </InputWrapper>
                        <ErrorMessage>{confirmPasswordError}</ErrorMessage>
                        <Button type='submit'>Continue</Button>
                        {isSignUpValidated
                            ? <SuccessMessage>Successfully registered!</SuccessMessage>
                            : null
                        }
                    </FormWrapper>
                </Box>
                <Text>Already using our app? <StyledLink to='/signin'>Click here to sign in</StyledLink></Text>
            </Container>
        </SignUpWrapper>
    )
}

export default SignUpComponent;