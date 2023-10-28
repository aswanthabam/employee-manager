import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../utils";

export default function Login() {
  const redirect = useNavigate();
  const onSubmit =   (e) =>{
    e.preventDefault()
    
    axios.post(process.env.REACT_APP_BACKEND_URL + 'api/auth/token/',formState).then((e)=>{
      console.log(e)
      if(e.status == 200) {
        alert("Sucessfully logged in!")
          console.log(e.data)
          login(e.data.token)
        redirect('/dashboard')
        
      }else if (e.response.status == 400) {
        alert("BAD Request")
      }
    }).catch((e)=>{
      console.log(e)
      alert("ERORR")
    })
  }
  const [formState,setFormState] = useState({
    username: null,
    password:null
  })
  return <div className="login">
    <span></span>
      <form className="form" onSubmit={onSubmit}>
        <h1>Login</h1>
        <input placeholder="Username" type="text" value={formState.username} onChange={(e)=>{setFormState({...formState,username:e.target.value,})}}></input>
        <input placeholder="Password" type="text" value={formState.password} onChange={(e)=>{setFormState({...formState,password:e.target.value,})}}></input>
        <button>Submit</button>
        <br/>
        <Link to="/register">Don't Have an account? register</Link>
      </form>
    </div>
}