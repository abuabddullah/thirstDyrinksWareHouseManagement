import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import GodownLocation from '../GodownLocation/GodownLocation';
import InventoryItems from '../InventoryItems/InventoryItems';
import ItemsStats from '../ItemsStats/ItemsStats';

const Home = () => {




    return (
        <main>
            <BannerCarousel />
            <InventoryItems/>
            <ItemsStats/>
            <GodownLocation/>
        </main>
    );
};

export default Home;