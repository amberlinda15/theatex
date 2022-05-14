import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom'
import { DATABASEPORT } from '../../otherComponents/globalKeys'
import axios from 'axios'

import css from '../movieDetails.module.css'

const Seats = () => {

    const [showId,setShowId] = useState(useParams().show_id)
    const [total,setTotal] = useState(0)
    const navigate = useNavigate()
    const location = useLocation()

    const [seats,setSeats] = useState({})
    const [selectedSeats,setSelectedSeats] = useState([])
    const [seatErr,setSeatErr] = useState(false);
    const [legend,setLegend] = useState([{
        color:"red",
        label:"booked"
    },{
        color:"green",
        label:"selected"
    },{
        color:"#fff",
        label:"empty"
    },{
        color:"purple",
        label:"premium"
    }])

    const alpha = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65));

    const addSeats = (id,type) => {
        const arr = [...selectedSeats]
        let totalPrice = total

        if(arr.findIndex(elem => elem == id) == -1){
            if(arr.length == 6)return
            arr.push(id)
            type == "premi" ? totalPrice += 500 : totalPrice += 270
        }else{
            arr.splice(arr.indexOf(id),1)
            type == "premi" ? totalPrice -= 500 : totalPrice -= 270
        }
        setSelectedSeats(arr)
        setTotal(totalPrice)
    }

    const checkBooked = id => {
        const arr = [...selectedSeats]
        if(arr.findIndex(elem => elem == id)){
            return css.booked
        }
        return ""
    }

    const seatHandler = hSeats => {
        const arr = []
        let subArr = []
        let hallSeats = {}
        hSeats.forEach((el,index) => {
            if(((index+1)%10) == 0){
                subArr.push(el)
                arr.push(subArr)
                subArr = []
            }else{
                subArr.push(el)
            }
        })
        hallSeats = {...arr}
        setSeats(hallSeats)
    }

    const fetchSeats = id => {
        if(!id){return}
        axios({
            method: 'get',
            url: `http://localhost:${DATABASEPORT}/movie/show/${id}`
          })
        .then((res) => {
            // console.log(res.data)
            seatHandler(res.data.row)
        })
        .catch(err => {
            console.log("SOMETHING WENT WRONG!!!", err);
        });
    }

    const submitSeatsHandler = () => {
        let queryStr = ""
        selectedSeats.forEach((el,index) => {
            if(index == 0){
                queryStr += `?a=${el}`
            }else{
                queryStr += `&a=${el}`
            }
        })
        axios.get(`http://localhost:${DATABASEPORT}/seats${queryStr}`)
        .then((res) => {
            console.log(res.data)
            navigate(`/moviedetails/selectseats/payment`+location.search)
        })
        .catch(err => {
            console.log("SOMETHING WENT WRONG!!!", err);
        });
        // /moviedetails/selectseats/payment 
    }

    useEffect(() => {
        fetchSeats(showId)
    },[showId])

    return(
        <div className={css.seats_main_cont}> 
            <div className={css.screen_head}>screen this way</div>
            <div className={css.seats_cont}>
                {Object.entries(seats).map(el => (
                <div className={`
                    ${css.seat_row_cont} 
                    ${alpha[el[0]] == "f" ? css.margin_bottom_25 : ""}
                    ${alpha[el[0]] == "c" ? css.margin_bottom_25 : ""}
                `} key={el[0]}>
                    <span className={css.row_name}>{alpha[el[0]]}</span>
                    {[...el[1]].map((elem,index) => {
                        let id = elem.seat_id
                        return(((el[1].length/2) == index+1) ? <div key={id} 
                        className={`${css.seat} ${css.margin_right_20}`} 
                        onClick = {() => addSeats(id,elem.seat_type)}
                        style={(elem.status == 1) ? {background:"red",color:"#fff"}
                        : selectedSeats.indexOf(id) != -1 ? {background:"green",color:"#fff"} : 
                        elem.seat_type == "premi" ? {background:"purple",color:"#fff"} : {}}>{index}</div>
                        :<div key={id} className={`${css.seat}`} onClick = {() => addSeats(id,elem.seat_type)} 
                        style={
                            (elem.status == 1) ? {background:"red",color:"#fff"}
                           : selectedSeats.indexOf(id) != -1 ? {background:"green",color:"#fff"} : 
                           elem.seat_type == "premi" ? {background:"purple",color:"#fff"} : {}
                        }>{index}</div>)
                    })}
                </div>
                ))}
                <div className={`${css.seat_row_cont}`}>
                    {legend.map(el => (<div key={el.color} className={css.legend_cont}>
                        <div style={{background:el.color,color:el.color}} className={css.seat}>n</div>
                        <span>{el.label}</span>
                    </div>))}
                </div>

            </div>
            {selectedSeats.length != 0 && <div className={css.price_footer_cont}>
                <div className={css.seat_info_cont}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <p>seat info</p> 
                    {selectedSeats.map(el => <span>{el}</span>)}
                </div>
                <div className={css.right_cont}>
                    <p>INR {total}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                    fill="currentColor" class="bi bi-arrow-right-circle-fill" 
                    viewBox="0 0 16 16" onClick={submitSeatsHandler}>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </div>
            </div>}
        </div>
    );
}

export default Seats;