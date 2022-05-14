import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import NavBar from '../landingPage/navBar/navBar';
import DatePicker from 'react-date-picker'
import axios from 'axios'
import { DATABASEPORT } from '../otherComponents/globalKeys'

import css from './movieDetails.module.css'

const MovieDetails = props => {

    const [navlinks,setNavlinks] = useState([
        {name:"home",link:"./home"},
        {name:"locations",link:"./home"},
    ]);
    
    const [movieId,setMovieId] = useState(useParams().movie_id)
    const [datetime,setDatetime] = useState();
    const [movie,setMovie] = useState({})
    const [movies,setMovies] = useState([]);
    const [movieTimings,setMovieTimings] = useState()
    const [datetimeErr,setDatetimeErr] = useState(false);
    const [timings,setTimings] = useState()
    const [seletedShow,setSeletedShow] = useState({})
    const location = useLocation();
    const navigate = useNavigate();



    const getMovieTimeHandler = (movie_id) => {
        if(!movie_id){return}
        axios({
            method: 'get',
            url: `http://localhost:${DATABASEPORT}/movie/${movie_id}`
          })
        .then((res) => {
            console.log(res.data)
            setMovieTimings(res.data)
        })
        .catch(err => {
            console.log("SOMETHING WENT WRONG!!!", err);
        });
    }

    const getMovieHandler = (id) => {
        const arr = [...movies]
        let obj = []
        obj = arr.filter(el => el.movie_id == id)
        setMovie(obj)
    }

    const fetchmovies = () => {
        axios({
            method: 'get',
            url: `http://localhost:${DATABASEPORT}/movies`
          })
        .then((res) => {
            setMovies(res.data.rows)
        })
        .catch(err => {
            console.log("SOMETHING WENT WRONG!!!", err);
        });
    }

    const dateHandler = date => {
        if(!date) return
        const arr = [...movieTimings["rows"]]
        const today = new Date()
        if(date.getDate() == today.getDate()){
            setTimings(movieTimings["rows"])
        }else if(date.getDate() == maxDateHandler().getDate()){
            setTimings(movieTimings["row"])
        }else{
            setTimings()
        }
    }

    const maxDateHandler = () => {
        const date = new Date()
        const tommorrow = new Date(date)
        tommorrow.setDate(date.getDate()+1)
        return tommorrow
    }

    useEffect(() => {
        fetchmovies()
    },[])

    useEffect(() => {

        getMovieTimeHandler(movieId)
        getMovieHandler(movieId)
    },[movieId,movies])

    useEffect(() => {
        dateHandler(datetime)
    },[datetime])

    const poster = movie[0] ? require(`../landingPage/${movie[0].movie_poster}`) : ""

    
    return(
        <div className={`${css.main_cont} ${css.row}`}>
            <div className={css.flex_box}>
                <div className={css.left_cont}
                style={{
                    backgroundImage: `url(${poster})`,
                    backdropFilter:'blur(5px)',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain',
                    backgroundPosition:'center'
                }}></div>
                <div className={css.right_cont}>
                    <h1>{movie[0] ? movie[0].movie_name : ""}</h1>
                    <h2>description</h2>
                    <div className={css.rating_cont}>
                        {movie[0] && movie[0].rating.length != 0 ?<div className={css.star_cont}>
                            {[...Array(Math.floor(movie[0].rating)).keys()].map(el => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0A500" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>))}
                            {movie[0].rating%1 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0A500" class="bi bi-star-half" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                            </svg> : ""}
                        </div> : <div className={css.star_cont}>
                            {[...Array(Math.floor(5)).keys()].map(el => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                            </svg>))}
                        </div>}
                        <span>{movie[0] ? movie[0].rating : ""}/5</span>                   
                        <span>imdb</span>
                        {movie[0] && <span>{Math.floor(movie[0].duration/60)}h {movie[0].duration%60}min</span>}        
                    </div>
                    
                    <div className={css.datetime_cont}>
                        <label>Select date : </label>
                        <div>
                            <DatePicker required className={css.dateTime} onChange={setDatetime} 
                            value={datetime} maxDate={maxDateHandler()} minDate={new Date()}/>
                        </div>
                    </div>
                    <div className={css.time_cont}>
                        {timings && timings.map(el => <div 
                        key={el.start_time} 
                        onClick={() => setSeletedShow(el)}
                        className={el.show_id == seletedShow.show_id ? css.selected : ""}>{`${el.start_time.split(":")[0]}:${el.start_time.split(":")[1]}`}</div>)}
                    </div>
                    <p className={css.errP} style={datetimeErr ? {opacity:1}:{opacity:0}}>select date and time</p>
                    <button className={css.select_seats_btn} onClick={() => {
                        if(datetime && seletedShow.show_id){
                            navigate(`/moviedetails/selectseats/${seletedShow.show_id}`+location.search)
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