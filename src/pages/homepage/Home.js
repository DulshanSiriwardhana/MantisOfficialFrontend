import React, { useEffect, useState } from 'react';
import './Home.css'
import Nameanimation from '../../components/nameanimation/nameanimation';
import Dp from '../../components/dp/dp';
import Descriptionanimation from '../../components/descriptionanimation/descriptionanimation';
import axios from 'axios';
import Article from '../../components/article/article';

const Home = () =>{
    const [articles, setArticles] = useState(null);
    var i=0;
    useEffect(()=>{
        getArticles();
    },[]);

    const getArticles =async()=>{
        const res = await axios.get('https://mantisofficialbackend.onrender.com/articles/');
        setArticles(res);
    }
    return(
        <div className='home'>
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
                <div className='homebottum'>
                    <p>Recent Projects</p>
                    <div className="articlepagecontainer1">
                        {<div className="articlepagecontainer2">
                            {articles?(articles.data.map((line,i=0)=>(
                                <div className="articlepagecontainer" key={line._id}>
                                    {i++<2?<Article articleId={line._id}/>:null}
                                </div>
                            ))):null}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;