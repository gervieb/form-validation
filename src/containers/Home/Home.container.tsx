import React, { FC, useState } from 'react';
import HomeComponent from './Home.component'

const Home:FC = () => {
    const [isLoading] = useState<boolean>(false)

    return (
        <HomeComponent isLoading={ isLoading } />
    )
}

export default Home;
