import React from 'react';
import { Route,Link,Routes } from 'react-router-dom'
import LandingPage from './components/landingPage/landingPage'
import Login from './components/Login/login'

function App() {

  const routes = [{
    path:"/",
    element:<LandingPage/>
  },{
    path:"/login",
    element:<Login/>
  }]

  return (
    <Routes>
      {routes.map(el => <Route path={el.path} element={el.element}/>)}
    </Routes>
  );
}

export default App;
