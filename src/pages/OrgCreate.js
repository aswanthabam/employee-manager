import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../utils";
import APICall from "../util/APICall";

export default function OrgCreate() {
  const redirect = useNavigate();
  const onSubmit =   (e) =>{
    e.preventDefault()
    APICall().post('organization/create/',formState).then((res)=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  const [formState,setFormState] = useState({
    name:null,
    email:null,
    contact:null,
    address:null
  })
  return <div className="login">
    <span></span>
      <form className="form" onSubmit={onSubmit}>
        <h1>Add An Organization</h1>
        <input placeholder="Organization Name" type="text" value={formState.name} onChange={(e)=>{setFormState({...formState,name:e.target.value,})}}></input>
        <input placeholder="E-Mail" type="text" value={formState.email} onChange={(e)=>{setFormState({...formState,email:e.target.value,})}}></input>
        <input placeholder="Contact Number" type="phone" value={formState.contact} onChange={(e)=>{setFormState({...formState,contact:e.target.value,})}}></input>
        <input placeholder="Address" type="text" value={formState.address} onChange={(e)=>{setFormState({...formState,address:e.target.value,})}}></input>
        <button>Submit</button>
        <br/>
        <Link to="/register">Don't Have an account? register</Link>
      </form>
    </div>
}