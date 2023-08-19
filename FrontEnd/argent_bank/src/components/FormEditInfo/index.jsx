import React from "react";
import "../../style/FormEditInfo/formEditInfo.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo, selectLog } from "../../utils/selectors";
import { changeUserName } from "../../features/userInfo.js";
import { toggleEdit } from "../../features/editInfo.js";

function FormEditInfo() {
  const [userName, setUserName] = useState("");
  const [editSucceeded, setEditSucceeded] = useState(false);
  const [editError, setEditError] = useState(false);
  const dispatch = useDispatch();
  const log = useSelector(selectLog);
  const userInfo = useSelector(selectUserInfo);
  const firstName = userInfo.firstName;
  const lastName = userInfo.lastName;

  const editPost = async () => {
    const logResponse = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + log.token,
        },
        body: JSON.stringify({
          userName: userName,
        }),
      }
    );
    const editData = await logResponse.json();
    console.log(editData);
    dispatch(changeUserName(editData.body.userName));
    if (editData.status === 200) {
      setEditSucceeded(true);
    }
  };

  const handleSubmit = async (e) => {
    const regEx = /^[0-9A-Za-z\s\-]+$/;
    e.preventDefault();
    setEditSucceeded(false);
    if (regEx.test(userName)) {
      editPost();
      setEditError(false);
      setUserName("");
    } else {
      setEditError(true);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(toggleEdit());
    setUserName("");
  };

  const EditSucceededMessage = () => {
    if (editSucceeded)
      return (
        <p className="EditSucceededMessage">
          Votre nom d'utilisateur a bien été modifié.
        </p>
      );
  };
  const EditErrorMessage = () => {
    if (editError)
      return (
        <p className="EditErrorMessage">
          Votre nom d'utilisateur ne peux contenir de signe spécifique.
        </p>
      );
  };

  return (
    <div className="editForm_wrapper">
      {EditSucceededMessage()}
      {EditErrorMessage()}
      <form type="submit" onSubmit={handleSubmit}>
        <div className="editInfo_input-wrapper">
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="editInfo_input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input type="firstName" id="firstName" value={firstName} disabled />
        </div>
        <div className="editInfo_input-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input type="lastName" id="lastName" value={lastName} disabled />
        </div>
        <div className="button_wrapper">
          <button className="sign-in-button" type="submit">
            Save
          </button>
          <button className="sign-in-button" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEditInfo;
