import axios from "axios"
import { useEffect, useState } from "react"
import APICall from "../util/APICall"
import { Link } from "react-router-dom"

export default function Dashboard() {
  const [orgs,setOrgs] = useState(null)
  useEffect(()=>{
    APICall().get('organization/').then((e)=>{
      console.log(e)
      if (e.status == 200){
        setOrgs(e.data.data)
      }
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return <div className='dashboard'>
    <Link to='/dashboard/organization/create'><button>Create an Organization</button></Link>
    <br/>
    <h3>Your Organizations</h3><br/>
    <div className="orgs">
      {orgs && (orgs.length > 0) ? 
      orgs.map((val)=>{
        return <div class="card" style={{width:'18rem'}}>
        <div class="card-body">
          <h5 class="card-title">{val.name}</h5>
          <p class="card-text">{val.address}</p>
          <Link to={'organization/view/'+val.organization_id} className="btn btn-primary">Go to Organization</Link>
        </div>
      </div>
      })
      : "You dont have any organization"}
    </div>
  </div>
}