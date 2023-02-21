import React from 'react'
import NavabarComp from './NavabarComp'
import Vedio from '../assets/Vedio.mp4';


const Home = () => {
    return (
        <div>
            <NavabarComp />

            <div className="bg-light rounded-lg img-wrapper">
                <video autoPlay loop muted
                style={{
                    position:"relative",
                    width:"100%",
                }}
                >
                    <source src={Vedio} type="video/mp4"/>
                </video>
                <div className="img-content">
                    <h2 className="animate__animated animate__backInLeft"><strong>The   Library</strong></h2>
                    <p className="animate__animated animate__backInRight">Opening the door to knowledge.</p>
                </div>
            </div>
        
        </div>
    )
}

export default Home
