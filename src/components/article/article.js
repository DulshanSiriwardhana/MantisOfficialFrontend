import React, { useEffect, useState } from "react";
import './article.css'
import axios from 'axios';
import Textmaker from "../../textmaker/textmaker";
import Video from "../video/video";
import Cover from "../cover/cover";

const Article =(props)=>{
    const {articleId} = props;
    const [article, setArticle] = useState(null);
    const [articleCover, setArticleCover] = useState(null);
    useEffect(()=>{
        getArticle();
    },[])

    const getArticle =async()=>{
        await axios.get(`https://mantisofficialbackend.onrender.com/articles/${articleId}`)
        .then((response)=>{
            setArticle(response.data);
            setArticleCover(response.data.article.cover)
        });
    }

    if(article){
        return(
            <div className="articlecontainer">
                <div>
                    {article.article.name}
                </div>
                <div className="articlecovercontainer">
                    <Cover Image ={articleCover}/>
                </div>
                <div className="articledescription">
                    <Textmaker Text ={article.article.description}/>
                </div>
                <div className="articlevideocontainer">
                    <Video url = {article.article.video}/>
                </div>
                <div className="articlegitlink">
                    <a href={article.article.link}>Go to github repository</a>
                </div>
            </div>
        );
    }
}

export default Article;