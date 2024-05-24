import React from 'react';
import './Home.css'
import Nameanimation from '../../components/nameanimation/nameanimation';
import Dp from '../../components/dp/dp';
import Descriptionanimation from '../../components/descriptionanimation/descriptionanimation';

const Home = () =>{
    return(
        <div className='homecontainer'>
            <div className='hometop'>
                <div className='homeleft'>
                    <div className='nameanimation'>
                        <Nameanimation/>
                    </div>
                    <div className='description'>
                        <Descriptionanimation/>
                    </div>
                </div>
                <div className='homeright'>
                    <Dp/>
                </div>
            </div>
        </div>
    );
}

export default Home;