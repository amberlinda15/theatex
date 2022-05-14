import React from 'react';
import { Route,Link,Routes } from 'react-router-dom'
import LandingPage from './components/landingPage/landingPage'
import CustomerLogin from './components/Login/customerLogin'
import MovieDetails from './components/movieDetails/movieDetails';
import Admin from './components/admin/admin'
import SelectSeats from './components/movieDetails/seats/seats'
import Payment from './components/payment/payment'
import PaymentAck from './components/payment/paymentAck'

function App() {

  const routes = [{
    path:"/",
    element:<LandingPage/>
  },{
    path:"/custLogin/",
    element:<CustomerLogin/>
  },{
    path:"/custLogin/:type",
    element:<CustomerLogin/>
  },{
    path:"/moviedetails/:movie_id",
    element:<MovieDetails/>
  },{
    path:"/admin",
    element:<Admin/>
  },{
    path:"/moviedetails/selectseats/:show_id",
    element:<SelectSeats/>
  },{
    path:"/moviedetails/selectseats/payment",
    element:<Payment/>
  },{
    path:"/moviedetails/selectseats/payment/ack",
    element:<PaymentAck/>
  }]

  return (
    <Routes>
      {routes.map(el => <Route path={el.path} element={el.element}/>)}
    </Routes>
  );
}

export default App;
