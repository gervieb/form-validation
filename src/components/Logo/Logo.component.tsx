import React, { FC } from 'react';
import deliveryLogo from 'assets/delivery.png';
import { Image } from './Logo.style';

const Logo:FC = () => {
    return <Image src={deliveryLogo} alt="delivery logo" />
}

export default Logo;