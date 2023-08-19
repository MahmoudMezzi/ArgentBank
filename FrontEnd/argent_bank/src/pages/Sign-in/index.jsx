import React from 'react'
import "../../style/SignIn/signIn.css"
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { selectLog } from '../../utils/selectors';
import FormLogin from '../../components/FormLogin'

function Sign_in() {
  const log = useSelector(selectLog)

  const isConnected = () => {
    if (log.token === null){
      return false
    }
      return true
  }

  if(isConnected()){
    return <Navigate to="/user" />
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormLogin />
      </section>
    </main>
    )
    }
  
  


export default Sign_in