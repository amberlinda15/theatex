import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './navBar/navBar';
import CardCont from './cardCont/cardCont';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from '../otherComponents/loader/Loader'
import axios from 'axios'

import css from './landingPage.module.css';

const LandingPage = () => {

    const [navlinks,setNavlinks] = useState([
        {name:"home",link:"./home"},
        {name:"locations",link:"./home"},
    ]);

    const [movies,setMovies] = useState([{}]);
    const [nowShowing,setNowShowing] = useState([]);

    // const [movies,setMovies] = useState([{
    //     background:poster1,
    //     name:"doctor strange 2",
    //     desc:"multiverse of madness",
    //     rating:4.5,
    //     ratingComp:"imdb",
    //     duration:"2hr30min",
    //     trailerLink:"https://youtu.be/aWzlQ2N6qqg"
    // },{
    //     background:poster2,
    //     name:"thor",
    //     desc:"love and thunder",
    //     rating:4,
    //     ratingComp:"imdb",
    //     duration:"2hr10min",
    //     trailerLink:"https://youtu.be/tgB1wUcmbbw"
    // },{
    //     background:poster3,
    //     name:"black adam",
    //     desc:"",
    //     rating:4.3,
    //     ratingComp:"imdb",
    //     duration:"2hr",
    //     trailerLink:"https://youtu.be/p99rer0DiCo"
    // }]);

    const fetchmovies = async () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/movies'
          })
        .then((res) => {
            setMovies(res.data.rows)
        })
        .catch(err => {
            console.log("SOMETHING WENT WRONG!!!", err);
        });
    }

    const nowShowingHandler = () => {
        if(!movies){return}
        const nowShowing = movies.map(el => {
            const d1 = new Date(el.release_date)
            const d2 = new Date()
            if(d1.getTime() < d2.getTime()){
                return el
            }
        })
        setNowShowing(nowShowing)
    }

    useEffect(() => {
        fetchmovies()
    },[])

    useEffect(() => {
        nowShowingHandler()
    },[movies])


    return(
        <Fragment>
            
            <div>
                <Navbar links={navlinks}/>
                {!movies || movies.length === 0 ? <Loader/>
                :<Carousel autoPlay infiniteLoop>
                {movies.map(el => {
                    const poster = el.movie_poster ? require(`./${el.movie_poster}`) : ""
                    return(<div className={css.banner_cont} style={{
                        backgroundImage: `url(${poster})`,
                        backdropFilter:'blur(5px)',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'contain',
                        backgroundPosition:'center'
                    }}>
                        <div className={css.backdrop}></div>
                    <div className={`${css.row}`}>
                        <div className={css.movie_details_cont}>
                            <div className={css.banner_text_cont}>
                                <h1>{el.movie_name}</h1>
                                <h3>{el.desc}</h3>
                                <div className={css.rating_cont}>
                                    {el.rating && el.rating.length != 0 ? <div className={css.star_cont}>
                                        {[...Array(Math.floor(el.rating)).keys()].map(el => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0A500" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>))}
                                        {el.rating%1 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0A500" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                                        </svg> : ""}
                                    </div>: <div className={css.star_cont}>
                                        {[...Array(Math.floor(5)).keys()].map(el => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>))}
                                        </div>}    
                                    <span>{el.rating}/5</span>                   
                                    <span>{el.ratingComp}</span>
                                    <span>{el.duration}min</span>                   
                                </div>
                            </div>
                            <div className={css.banner_text_cont_right}>
                                <a href={el.trailerLink} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="#F0A500" className="bi bi-play-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                    </svg>
                                </a>
                                <span>Watch trailer</span>
                            </div>
                        </div>
                        
                    </div>
                </div>)})}
                </Carousel>}
                <CardCont head="now showing" movies={nowShowing}/>
                <CardCont head="coming soon" movies={nowShowing}/>
            </div>
        </Fragment>
    );
}

export default LandingPage;