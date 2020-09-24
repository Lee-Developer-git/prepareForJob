import React, { Component } from "react";
import Login from "./Login/Login";
import SignUp from "./Register/SignUp";
import Agreement from "./Register/Agreement";
import MyPage from "./MyPage/MyPage";
import MyPage_2 from "./MyPage/MyPage_2";
import "./App.css";
import Favourites from "./Favourite/Favourites";

class App extends Component {
  render() {
    return (
      <div class="login">
        <Login />
        <Agreement />
        <SignUp />
        <MyPage />
        <MyPage_2 />
        <Favourites />
      </div>
    );
  }
}

export default App;
