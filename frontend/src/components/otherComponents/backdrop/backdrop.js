import React from 'react'

const backdrop = () => (<div style={{
    width: "100%",
    height: "100vh",
    backgroundColor: "#000",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    opacity:0.5
}}></div>)

export default backdrop