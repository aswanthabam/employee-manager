import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import APICall from "../util/APICall"

export default function OrgView(){
  const params = useParams()
  const [org,setOrg] = useState(null)
  const [depts,setDepts] = useState(null)
  useEffect(()=>{
    APICall().get('organization/?organization_id='+params.id).then((res)=>{
      if(res.data.status== 'success') {
        setOrg(res.data.data[0])
      }
    }).catch(err=>{
      console.log(err)
    })
    APICall().get('organization/'+params.id+'/department/').then((res)=>{
      console.log(res)
    }).catch(er=>{
      console.log(er)
    })
  },[])
  return (<div className='org-view'>
    {org && <>
    <h1>{org.name}</h1><br/>
    <h2>Departments</h2>
      {
        depts && <>
        Your Departments
        </>
      }
    </>}
  </div>)
}