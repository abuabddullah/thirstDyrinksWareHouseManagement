// import React, { useRef, useState } from 'react';

// import {
//     MapContainer,
//     TileLayer,
//     useMap,
//   } from 'https://cdn.esm.sh/react-leaflet'
// import osm from "./osm-providers";
// import "leaflet/dist/leaflet.css";

// const GodownLocation = () => {
//     // const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
//     const ZOOM_LEVEL = 9;
//     const mapRef = useRef();
//     return (

//         <section className='my-5 p-md-5 bg-orange'>
//             <div className="container bg-white p-5">
//                 <div className='mb-5 text-center display-5 fw-bold '>
//                     Godown Location
//                     <hr className="w-25 text-orange p-1 mx-auto" />
//                 </div>

//                 <div className="row h-50 w-75">
//                 <div className="col text-center">
//                     <h2>React-leaflet - Basic Openstreet Maps</h2>
//                     <p>Loading basic map using layer from maptiler</p>
//                     <div className="col">
//                         <MapContainer center={{ lat: 13.084622, lng: 80.248357 }} zoom={ZOOM_LEVEL} ref={mapRef}>
//                             <TileLayer
//                                 url={osm.maptiler.url}
//                                 attribution={osm.maptiler.attribution}
//                             />
//                         </MapContainer>
//                     </div>
//                 </div>
//             </div>



//             </div>
//         </section>
//     );
// };

// export default GodownLocation;
















import React, { useRef, useState } from 'react';

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const GodownLocation = () => {

    return (

        <section className='my-5 p-md-5 bg-orange'>
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
                                        Thirsty-drinks Dealer House <br /> Fukutia, Dhamrai, Dhaka.
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









// import React, { useRef, useState } from 'react';

// // import {
// //     MapContainer,
// //     TileLayer,
// //     useMap,
// //   } from 'https://cdn.esm.sh/react-leaflet'

// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

// const GodownLocation = () => {
//     const position = [51.505, -0.09]
//     return (

//         <section className='my-5 p-md-5 bg-orange'>
//             <div className="container bg-white p-5">
//                 <div className='mb-5 text-center display-5 fw-bold '>
//                     Godown Location
//                     <hr className="w-25 text-orange p-1 mx-auto" />
//                 </div>

//                 <div className="row">
//                     <div className="col text-center">
//                         <h2>React-leaflet - Basic Openstreet Maps</h2>
//                         <p>Loading basic map using layer from maptiler</p>
//                         <div className="col ">

//                             <MapContainer className='mapHolder' center={position} zoom={13} scrollWheelZoom={false}>
//                                 <TileLayer
//                                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                                 />
//                                 <Marker position={position}>
//                                     <Popup>
//                                         A pretty CSS3 popup. <br /> Easily customizable.
//                                     </Popup>
//                                 </Marker>
//                             </MapContainer>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//         </section>
//     );
// };

// export default GodownLocation;