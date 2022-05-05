import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../customHooks/useItems/useItems';
import SingleItem from '../HomePage/SingleItem/SingleItem';
import Loading from '../sharedPages/Loading/Loading';
import Inventories4NonRegistered from './Inventories4NonRegistered/Inventories4NonRegistered';
import Inventories4Registered from './Inventories4Registered/Inventories4Registered';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Forbidden from '../Login-Register-RequireAuth/Forbidden/Forbidden';

const AllItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    return (
        <section className='py-5 px-md-5'>
            <div className="container">
                <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
                    <img
                        src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top bg-orange rounded-circle d-none d-md-block me-3"
                        alt=""
                    />
                    All Inventories</div>

                {
                    user ? (
                        <>
                        {
                            user.emailVerified ? <Inventories4Registered /> : <Forbidden />
                        }
                        </>
                    ) : <Inventories4NonRegistered />
                }


            </div>

            <FaPlus title='Want to add Items?' onClick={() => navigate(`/itemsUp`)} className='cursor-pointer d-inline-block bg-orangeTransparent display-1 p-2 rounded-circle position-fixed plusBtn border border-white' />

        </section>
    );
};

export default AllItems;