import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import APICall from "../util/APICall";

export default function RoleLogged(props) {
  const redirect = useNavigate()
  const [loaded,setLoaded] = useState(false)
  useEffect(()=>{
    APICall().get('auth/verify/').then((res)=>{
      if(!res.data.data.verified) {
        redirect('/')
      }else {
        setLoaded(true)
      }
    }).catch(err=>{
      redirect('/')
    })
  })
  return <>{loaded && <Outlet/>}</>
}