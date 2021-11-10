import React, { FC } from 'react';
import Loader from 'components/Loader/Loader.component'
import { HomeWrapper, ButtonWrapper, ButtonLink } from './Home.style';

interface Props {
    isLoading: boolean,
}

const Home:FC<Props> = ({ isLoading }) => {
    return (
        <HomeWrapper>
              { isLoading
                ? <Loader />
                : <ButtonWrapper>
                    <ButtonLink to="/signin">SIGN IN</ButtonLink>
                </ButtonWrapper > 
            }  
        </HomeWrapper>
    )
}

export default Home;
