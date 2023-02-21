import React from "react";

 class Login extends React.Component {
   render() {
       return (
           <div>
               <form>
                   <div>
                       <div className='form-group'>
                           <label>UserName</label>
                           <input name='uname' type='text' className='form-control' placeholder='Enter The Username'/>
                       </div>
                       <div className='form-group'>
                           <label>Password</label>
                           <input name='uname' type='password' className='form-control' placeholder='Enter The Password'/>
                       </div>
                       <button type='submit' value='Login'>Login</button>
                   </div>
               </form>

           </div>
       );
   }
}
export default Login;