import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative
`

export const ButtonWrapper = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const ButtonLink = styled(Link)`
    width: 200px;
    text-decoration: none;
    font-size: 24px;
    font-weight: 200;
    border: 1px solid transparent;
    border-radius: 2px;
    letter-spacing: 2px;
    padding: 12px 60px;
    background-color: #007aff;
    color: #fff;
    outline: none;
`