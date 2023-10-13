import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/Desc.css";
const Description = (props) => {

    const API_KEY = '0c1b7efc96f14171bab0634b7033b86e';
    const randQ = Math.floor(Math.random() * 25);

    const [ quotas , setQuotas ] = useState([]);
    const [ author , setAuthor] = useState([]);
    const [ news, setNews] = useState([]);
    const [ techNews, setTechNews] = useState([]);


    const newsUrlTesla = `https://newsapi.org/v2/everything?q=tesla&from=2023-09-13&sortBy=publishedAt&apiKey=${API_KEY}`;
    const newsUrlApple = `https://newsapi.org/v2/everything?q=apple&from=2023-10-12&to=2023-10-12&sortBy=popularity&apiKey=${API_KEY}`;

    useEffect(() =>{

        const fetchTechFeeds = async () =>{
            const res = await axios.get(newsUrlApple);
            const resdata = await res.data;
            setTechNews(resdata.articles[randQ]);
            console.log(resdata.articles[randQ]);
        }


        const fetchFeeds = async () =>{
            const res = await axios.get(newsUrlTesla);
            const resdat = await res.data;
            setNews(resdat.articles[randQ]);
            console.log(resdat.articles[randQ]);
        }


        const fechQuotes = async () =>{
            const response = await axios.get(`https://dummyjson.com/quotes/${randQ}`);
            const resdata = await response.data;
            setAuthor(resdata.author);
            setQuotas(resdata.quote);
            console.log(randQ)
        } 
        
        fetchTechFeeds();
        fetchFeeds();
        fechQuotes(); 

    },[])

    

    return ( 

        <div className="desc">
            <div className="card text-white bg-info mb-3" style={{ maxWidth: '30rem' }}>
              <div className="card-header">Trending Tech News</div>
                <div className="card-body">
                    <h5 className="card-title">{techNews.title}</h5>
                    <p className="card-text">
                        ``<cite>{techNews.description}</cite>``
                        <span>
                            {techNews.url}
                        </span>
                    </p>
                    
                </div>
            </div>

            <div className="card text-white bg-info mb-3"  style={{ maxWidth: '30rem' }}>
              <div className="card-header">Trending News</div>
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">
                        ``<cite>{news.description}</cite>``
                        <span>
                            {news.author}
                        </span>
                    </p>
                    
                </div>
            </div>

            <div className="card text-white bg-success mb-3" style={{ maxWidth: '30rem' }}>
                <div className="card-header">Famous Quotes</div>
                    <div className="card-body">
                        <h5 className="card-title">Author: {author}</h5>
                        <p className="card-text">
                            <cite>``{quotas}``</cite>
                        </p>
                    </div>
            
            </div>
       
        </div>
     );
}
 
export default Description;