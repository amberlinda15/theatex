import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import NavBar from '../landingPage/navBar/navBar';
import DatePicker from 'react-date-picker'

import css from './movieDetails.module.css'

const MovieDetails = props => {

    const [navlinks,setNavlinks] = useState([
        {name:"home",link:"./home"},
        {name:"locations",link:"./home"},
    ]);
    const [datetime,setDatetime] = useState();
    const [movie,setMovie] = useState({
        movie_name:"doctor strange",
        movie_desc:"multiverse of madness",
        rating:4.5,
        ratingComp:"imdb",
        duration: 165
    });
    const [datetimeErr,setDatetimeErr] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    
    return(
        <div className={`${css.main_cont} ${css.row}`}>
            <div className={css.flex_box}>
                <div className={css.left_cont}
                style={{
                    background:`url()`,
                    backgroundSize:"contain",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat"
                }}></div>
                <div className={css.right_cont}>
                    <h1>{movie.movie_name}</h1>
                    <h2>{movie.movie_desc}</h2>
                    <div className={css.rating_cont}>
                        <div className={css.star_cont}>
                            {[...Array(Math.floor(movie.rating)).keys()].map(el => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0A500" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>))}
                            {movie.rating%1 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0A500" class="bi bi-star-half" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                            </svg> : ""}
                        </div>
                        <span>{movie.rating}/5</span>                   
                        <span>{movie.ratingComp}</span>
                        <span>{Math.floor(movie.duration/60)}h {movie.duration%60}min</span>        
                    </div>
                    
                    <div className={css.datetime_cont}>
                        <label>Select date : </label>
                        <div>
                            <DatePicker required className={css.dateTime} onChange={setDatetime} value={datetime}/>
                            <p style={datetimeErr ? {opacity:1}:{opacity:0}}>select date</p>
                        </div>
                    </div>
                    <div className={css.time_cont}>
                        {[...Array(4).keys()].map(el => <div key={el}>{el}:00</div>)}
                    </div>
                    <button className={css.select_seats_btn} onClick={() => {
                        if(datetime){
                            navigate("/moviedetails/selectseats"+location.search)
                            setDatetimeErr(false)

                        }else{
                            setDatetimeErr(true)
                        }
                    }}>
                        <span>select seats</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;