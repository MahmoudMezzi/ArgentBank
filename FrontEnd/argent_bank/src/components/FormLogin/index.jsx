import React from "react";
import "../../style/FormLogin/formLogin.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/log";
import { saveUserInfo } from "../../features/userInfo";

function FormLogin() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const logResponse = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    });
    const logData = await logResponse.json();
    if (logData.status === 400) {
      setError(true);
    } else {
      dispatch(logIn(logData.body.token));
      setError(false);
      return logData.body.token;
    }

    //console.log(logData.body.token)
    //alert(logData.message)

    // const userInfoResponse = await fetch ('http://localhost:3001/api/v1/user/profile',{
    //   method: 'POST',
    //   headers: {
    //     'accept': 'application/json',
    //     'Authorization': "Bearer " + logData.body.token
    //   },
    //   body: JSON.stringify({

    //   }),
    // });
    // const userInfoData = await userInfoResponse.json();
    // //console.log(userInfoData.body)
    // dispatch(saveUserInfo(userInfoData.body))
  };

  const getUserInfo = async (token) => {
    const userInfoResponse = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({}),
      }
    );
    const userInfoData = await userInfoResponse.json();
    dispatch(saveUserInfo(userInfoData.body));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // signIn().then((response) => {
    //   getUserInfo(response).then()
    // })
    const response = await signIn();

    await getUserInfo(response);

    setUserName("");
    setPassword("");
  };

  return (
    <form type="submit" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        {error ? (
          <p className="errorMessage">
            Le nom d'utilisateur ou le mot de passe est incorrect.
          </p>
        ) : null}
        <input
          type="email"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default FormLogin;
