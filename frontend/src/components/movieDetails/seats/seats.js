import React, { Fragment, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import css from '../movieDetails.module.css'

const Seats = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [seats,setSeats] = useState({
        a:10,
        b:10,
        c:10,
        d:10,
        e:10,
        f:10,
        g:10,
        h:10
    })
    const [bookedSeats,setBookedSeats] = useState(["e7","f7","e9","a2","g0","g1","g2"])
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
    }])

    const addSeats = (id) => {
        const arr = [...selectedSeats]

        if(bookedSeats.indexOf(id) != -1){return}

        if(arr.findIndex(elem => elem == id) == -1){
            arr.push(id)
        }else{
            arr.splice(arr.indexOf(id),1)
        }
        setSelectedSeats(arr)
    }

    const checkBooked = id => {
        const arr = [...selectedSeats]
        if(arr.findIndex(elem => elem == id)){
            return css.booked
        }
        return ""
    }

    return(
        <div className={css.seats_main_cont}> 
            <div className={css.screen_head}>screen this way</div>
            <div className={css.seats_cont}>
                {Object.entries(seats).map(el => (
                <div className={`
                    ${css.seat_row_cont} 
                    ${el[0] == "f" ? css.margin_bottom_25 : ""}
                    ${el[0] == "c" ? css.margin_bottom_25 : ""}
                `} key={el[0]}>
                    <span className={css.row_name}>{el[0]}</span>
                    {[...Array(el[1]).keys()].map(elem => {
                        let id = el[0]+elem
                        return(el[1]/2 == elem+1 ? <div key={id} className={`${css.seat} ${css.margin_right_20}`} onClick = {() => addSeats(id)}
                        style={bookedSeats.indexOf(id) != -1 ? {background:"red"}
                        : selectedSeats.indexOf(id) != -1 ? {background:"green"} : {}}></div>
                        :<div key={id} className={`${css.seat}`} onClick = {() => addSeats(id)} 
                        style={
                           bookedSeats.indexOf(id) != -1 ? {background:"red"}
                           : selectedSeats.indexOf(id) != -1 ? {background:"green"} : {} 
                        }></div>)
                    })}
                </div>
                ))}
                <div className={`${css.seat_row_cont}`}>
                    {legend.map(el => (<div key={el.color} className={css.legend_cont}>
                        <div style={{background:el.color}} className={css.seat}/>
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
                    <p>INR {270*selectedSeats.length}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </div>
            </div>}
        </div>
    );
}

export default Seats;