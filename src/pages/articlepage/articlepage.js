import React, { useEffect, useState } from "react";
import './articlepage.css'
import Article from "../../components/article/article";
import axios from "axios";

const ArticlePage =()=>{
    const [articles, setArticles] = useState(null);
    useEffect(()=>{
        getArticles();
    },[]);

    const getArticles =async()=>{
        const res = await axios.get(`${process.env.REACT_APP_SERVER}articles/`);
        setArticles(res);
    }
    return(
        <div className="articlepagecontainer1">
            {<div className="articlepagecontainer2">
                {articles?(articles.data.map((line)=>(
                    <div className="articlepagecontainer" key={line._id}>{<Article articleId={line._id}/>}</div>
                ))):null}
            </div>}
        </div>
    );
}

export default ArticlePage;