import React from 'react'
import './Home.css'
import Login from './Login'


const Home = () => {

  return (
    <div className="box">
      <div className="left">
        <h1>Home</h1>
      </div>
      <div className="login">
        <Login></Login>

      </div>
    </div>

  )

}

export default Home