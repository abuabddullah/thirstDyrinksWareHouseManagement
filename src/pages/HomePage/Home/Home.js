import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <main>
            <BannerCarousel />
            <InventoryItems/>
        </main>
    );
};

export default Home;