import React from 'react'
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectLog } from '../../utils/selectors';

import UserHeader from '../../components/UserHeader'
import Account from '../../components/Account'

function User() {
  const log = useSelector(selectLog)

  const isConnected = () => {
    if (log.token === null){
      return false
    }
      return true
  }

  if (!isConnected()) {
      return <Navigate replace to="/sign-in" />;
    } else {
  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"} />
      <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} description={"Available Balance"} />
      <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} description={"Current Balance"} />
    </main>
  )
}
}

export default User