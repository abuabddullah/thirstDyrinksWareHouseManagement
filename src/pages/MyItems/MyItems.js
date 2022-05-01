// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import useMyItems from '../customHooks/useMyItems/useMyItems';

// const MyItems = () => {
//     const [user, loading, error] = useAuthState(auth);
//     const [myItems, setMyItems] = useMyItems()


//     return (
//         <section className='py-5 px-md-5'>
//             <div className="container">
//                 <div className='mb-5 text-center display-5 fw-bold d-flex justify-content-center align-items-center'>
//                     <img
//                         src="https://i.ibb.co/M53JXWf/thirsty-drinks-logos-black.png"
//                         width="50"
//                         height="50"
//                         className="d-inline-block align-top bg-orange rounded-circle d-none d-md-block me-3"
//                         alt=""
//                     />
//                     My Items : {myItems.length}</div>

//             </div>
//         </section>
//     );
// };

// export default MyItems;















import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useMyItems from '../customHooks/useMyItems/useMyItems';
import SingleItem from '../HomePage/SingleItem/SingleItem';
import Loading from '../sharedPages/Loading/Loading';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItems] = useMyItems(user)


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
                    My Items ({myItems.length})</div>

                <div>
                    {
                        myItems.length > 0 ? (
                            <Row xs={1} md={2} className="g-4">

                                {
                                    myItems.map(item => <SingleItem
                                        key={item._id}
                                        item={item} />)
                                }

                            </Row>) : <Loading />
                    }
                </div>
            </div>
        </section>
    );
};

export default MyItems;