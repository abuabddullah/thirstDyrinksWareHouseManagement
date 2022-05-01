import React, { useRef, useState } from 'react';

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const GodownLocation = () => {

    return (

        <section className='my-5 p-md-5'>
            <div className="container bg-white p-5">
                <div className='mb-5 text-center display-5 fw-bold '>
                    Godown Location
                    <hr className="w-25 text-orange p-1 mx-auto" />
                </div>

                <div className="row">
                    <div className="col text-center">
                        <p><code className="text-warning">Map Using <strong>React-leaflet - Basic Openstreet Maps</strong></code></p>
                        <div className="col ">

                            <MapContainer style={{maxWidth:"100%", height:"500px"}} center={[23.925426775096945, 90.18792095309729]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[23.925426775096945, 90.18792095309729]}>
                                    <Popup>
                                        Thirsty-drinks Dealer Godown <br /> Fukutia, Dhamrai, Dhaka.
                                    </Popup>
                                </Marker>
                            </MapContainer>


                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default GodownLocation;






