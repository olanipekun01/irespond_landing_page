import React, { Component } from "react";
import "../styles/layouts/Header.scss";

import logo_icon from "../assets/logo_1.svg";
import menu_icon from "../assets/Menubar.svg";
import close_btn from "../assets/CloseButton.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navActive: false,
    }
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <img className="logo_icon" src={logo_icon} alt="" />

          <img onClick={() => {
            this.setState({
            navActive: true,
          })
          }}
            className={this.state.navActive ? "hamburger_icon active" : "hamburger_icon"} src={menu_icon} alt="" />
          
          <img onClick={() => {
            this.setState({
            navActive: false,
          })
          }} className={this.state.navActive ? "close_btn_icon active" : "close_btn_icon"} src={close_btn} alt="" />  
          <nav className={this.state.navActive ? 'active': ""}>
            <ul>
              <li className="top">Home</li>
              <li>About Us</li>
              <li>Assessments</li>
              <li>Korporate</li>
              <li>Find Help</li>
            </ul>

            <div className="btn_wrapper">
              <button className="signin_btn">Sign In</button>
              <button className="book_session_btn">Book a Session</button>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
