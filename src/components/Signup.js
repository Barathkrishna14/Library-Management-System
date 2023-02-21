import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NavabarComp from './NavabarComp';
import lib from '../assets/lib.mp4'

const Signup = (e) => {
    const history = useHistory()
    const [cemail, setCemail] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    async function handleSubmit(event){
        event.preventDefault();
        const data=new FormData(event.target);
        const login=true;
        alert("Successfully Created Go to Login Page")
        await fetch("http://localhost:8080/Library/user?name=" +name+ "&email=" + email + "&phone=" + phone +"&password="+ password + "&cpassword=" +cpassword +"&cemail="+cemail,{crossDomain:true})
        
    }
        
    return (
        <div>
            <NavabarComp />
            <div className="container-signup">
                <div className="signup-more">
                    <video autoPlay loop muted
                           style={{
                               position:"relative",
                               width:"100%",
                               background:"cover",
                               height:"100%",
                               background:"black"

                           }}
                    >
                        <source src={lib} type="video/mp4"/>
                    </video>
                </div>
                <div className="wrap-signup">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <span className="signup-form-title">Sign Up</span>
                        
                        <div className="wrap-input">
                            <span className="label-input">Name</span>
                            <input className="input" type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Your Name" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Email</span>
                            <input className="input" type="text" name="cemail" value={cemail} onChange={(e) => { setCemail(e.target.value) }} placeholder="Email Address" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Confirm Email</span>
                            <input className="input" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Phone</span>
                            <input className="input" type="Number" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone Number" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Password</span>
                            <input className="input" type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Confirm Password</span>
                            <input className="input" type="password" name="cpassword" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="container-signup-form-btn">
                            <div className="wrap-signup-form-btn"> 
                                <button className="signup-form-btn" >Sign Up</button>
                            </div>

                            <Link className="signin-form-btn" align="center" to="/login">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default Signup
