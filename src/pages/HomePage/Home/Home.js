import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import GodownLocation from '../GodownLocation/GodownLocation';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <main>
            <BannerCarousel />
            <InventoryItems/>
            <GodownLocation/>
        </main>
    );
};

export default Home;