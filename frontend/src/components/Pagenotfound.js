import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () =>
{
let [x,setx] = useState('Home Page');
let colorchnage = (()=>{
setx("Go to Home page");
})
  return (
    <div>
        <center>
      <h1 className='fw-bolder' style={{marginTop:"230px", fontSize:"100px"}}>404 Page Not Found</h1>
      <h3 className='text-success'><Link className='text-success' onMouseOver={colorchnage} to="/">{x}</Link></h3>
      </center>
    </div>
  );
};

export default Pagenotfound
