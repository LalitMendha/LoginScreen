import { useState } from "react";
import "./styles.css";

function LoginPage() {
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  function handlePAssword(e) {
    var pass = e.target.value;
    setPassword(pass);
  }

  function checkAlphaNumeric() {
    if (!password.match("/^[0-9a-z]+$/")) {
      return false;
    }
  }

  function handleConfirmPassword(e) {
    if (checkAlphaNumeric()) {
      var confPass = e.target.value;
      setConfirmPassword(confPass);
      var msg = document.getElementById("alphaNumeric");
      msg.style.visibility = "hidden";
    } else {
      var msg = document.getElementById("alphaNumeric");
      msg.style.visibility = "visible";
    }
  }
  function handleSubmit(e) {
    // var btn = document.getElementById("btn-submit");
    if (password !== confirmPassword) {
      var msg = document.getElementById("errorMsg");
      msg.style.visibility = "visible";
      // btn.style.visibility = "hidden";
    } else {
      var msg = document.getElementById("errorMsg");
      msg.style.visibility = "hidden";
      // btn.style.visibility = "visible";
    }
  }

  return (
    <div className="container">
      <div className="flex_container">
        <label className="flex_item">User id: </label>
        <input className="flex_item" type="text" />
      </div>
      <br />
      <div className="flex_container">
        <label className="flex_item">Password: </label>
        <input
          onChange={handlePAssword}
          type="password"
          className="flex_item"
        />
      </div>
      <p id="alphaNumeric">
        * Password should contain atleast one alpha numeric charater
      </p>
      <br />
      <div className="flex_container">
        <label className="flex_item">Confirm Password: </label>
        <input
          onChange={handleConfirmPassword}
          className="flex_item"
          type="password"
        />
      </div>
      <p id="errorMsg">* Password doesn't match </p>
      <button id="btn-submit" onClick={handleSubmit} type="Submit">
        Submit
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}
