import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APICall from "../util/APICall";

export default function Home() {
  const redirect = useNavigate()
  useEffect(()=>{
    APICall().get('auth/verify/').then((res)=>{
      if(res.data.data.verified) {
        redirect('/dashboard')
      }
    })
  })
  return <div className="home">
      <h1>Under Development</h1>
      <p>This project is not fully developed, only the following pages are partially ready<br/>
        <ul>
          <li><Link to='/login'>Login Page</Link></li>
          <li><Link to='/register'>Register Page</Link></li>
        </ul>
        <br/>
        Dashboard is underdevelopemnt and only a few functionalities are included. <Link to='/dashboard'>Go to dashboard</Link>
      </p>
      <b style={{fontSize: 20}}>NB : All the API Endpoints are completed and Tested. View More about it <a href="https://github.com/aswanthabam/employee-manager-api">here</a></b><br/>
      <b style={{fontSize: 15}}>NB : For more details about the solution, checkout this README : <a href="https://github.com/aswanthabam/employee-manager-api/blob/main/README.md">https://github.com/aswanthabam/employee-manager-api/blob/main/README.md</a></b>
    </div>
}