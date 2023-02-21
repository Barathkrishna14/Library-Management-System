import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import NavabarComp from './NavabarComp';
import lib from '../assets/lib.mp4';
import AdminDashboard from'./AdminDashboard'
import { Button, Card } from 'react-bootstrap';
import UserDashboard from './UserDashboard'
const Login = (e) => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [_data, setData] = useState('')
    const [adminDashboard,setadminDashboard]=useState()
    const [userDashboard,setUserDashboard]=useState()
    async function loginUser (e){
        e.preventDefault();
        const data=new FormData(e.target)
        await fetch('http://localhost:8080/Library/Login?username='+username+'&password='+password ) 
        .then((res)=>res.json())
        .then((data)=>{
            localStorage.setItem('mail',username)
            localStorage.setItem('password',password)
            window.localStorage.setItem('Loginvalues',data)
            setData(data)
        console.log(localStorage.getItem("mail"),"Awwwwww")

            if(data.status==="success"){
                alert("login Success")

                console.log(data.admin,"data.admin")
                if (data.admin=="t"){
                    setadminDashboard(true)
                    console.log(adminDashboard,"adminDashboard")
                
            }
                else{
                    setadminDashboard(false)
                    setUserDashboard(true)
                    console.log(userDashboard,"userDashboard")

                
                }
            }
            else{
                alert("Login Failed")
            }
        })

    }
    console.log(userDashboard,adminDashboard,"howww")

    return (
        <Card>
        <div>
            <NavabarComp />
           { (!adminDashboard & !userDashboard )&& <div className="container-signin">
                <div className="signin-more">
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
                <div className="wrap-signin">
                    <form className="signin-form" onSubmit={loginUser}>

                        <span className="signin-form-title">Log in</span>

                        <div className="wrap-input">
                            <span className="label-input">Email Address</span>
                            <input className="input" type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Email Address" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Password</span>
                            <input className="input" type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="container-signin-form-btn">
                            <div className="wrap-signin-form-btn">                               
                                <button className="signin-form-btn">Login</button>    
                                 
                            </div>
                            <Link className="signup-form-btn" align="center" to="/signup">Sign up </Link>
                        </div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" value="yes" id="customCheck1" ></input>  Remember Me
                       
                    </div>
                    </form>
                </div>
            </div>}
        </div>
                   { adminDashboard &&  <AdminDashboard user={_data} barath/>}
                   { userDashboard &&  <UserDashboard user={_data} />}
                   </Card>
    )
}

export default Login
