import React from 'react';
import {Link } from 'react-router-dom'

import './home.css';

function Home() {
    return(
        <section className='home'>
            <img src='https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif' alt='Welcome' />
            <h1>WELCOME TO BELATRIX FILTER!</h1>
            <Link to='/filter' className='btn'>Go To Filters!</Link>
        </section>
    )
}

export default Home;