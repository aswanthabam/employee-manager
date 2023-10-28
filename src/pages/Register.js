import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
  const redirect = useNavigate();
  const onSubmit =   (e) =>{
    e.preventDefault()
    
    axios.post(process.env.REACT_APP_BACKEND_URL + 'api/auth/register/',formState).then((e)=>{
      console.log(e)
      if(e.status == 200) {
        alert("Sucessfully created user!")
        redirect('/login')
      }else if (e.response.status == 400) {
        alert("BAD Request")
      }
    }).catch((e)=>{
      console.log(e)
      alert("ERORR")
    })
  }
  const [formState,setFormState] = useState({
    first_name: null,
    last_name: null,
    email: null,
    username: null,
    password:null,
    user_type: "USR"
  })
  return <div className="register">
    <span></span>
      <form className="form" onSubmit={onSubmit}>
        <h1>Register </h1>
        <input placeholder="First Name" type="text" value={formState.first_name} onChange={(e)=>{setFormState({...formState,first_name:e.target.value,})}}></input>
        <input placeholder="Last Name" type="text" value={formState.last_name} onChange={(e)=>{setFormState({...formState,last_name:e.target.value,})}}></input>
        <input placeholder="Email" type="text" value={formState.email} onChange={(e)=>{setFormState({...formState,email:e.target.value,})}}></input>
        <input placeholder="Username" type="text" value={formState.username} onChange={(e)=>{setFormState({...formState,username:e.target.value,})}}></input>
        <input placeholder="Password" type="text" value={formState.password} onChange={(e)=>{setFormState({...formState,password:e.target.value,})}}></input>
        {/* <input placeholder="Type" type="text" value={formState.user_type} onChange={(e)=>{setFormState({...formState,user_type:e.target.value,})}}></input> */}
        <button>Submit</button>
        <br/>
        <Link to="/login">Already Have an account? login</Link>
      </form>
    </div>
}