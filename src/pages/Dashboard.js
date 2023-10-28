import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [orgs,setOrgs] = useState(null)
  useEffect(()=>{
    var token = localStorage.getItem('token')
    console.log(token)
    axios.get(process.env.REACT_APP_BACKEND_URL + 'api/organization/',{ headers: {"Authorization" : `Bearer ${token}`} }).then((e)=>{
      console.log(e)
      if (e.status == 200){
        setOrgs(e.data.data)
        
      }
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return <div className='dashboard'>
    <div className="orgs">
      {JSON.stringify(orgs)}
    </div>
  </div>
}