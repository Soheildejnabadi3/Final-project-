import React from 'react';
import Navbar from '../Components/Navbar';
import loginImg from "../images/login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="base-container-l" ref={this.props.containerRef}>
          <div className="header-l">Login</div>
          <div className="content-l">
            <div className="image-l">
              <img src={loginImg} />
            </div>
            <div className="form-l">
              <div className="form-group-l">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group-l">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div className="footer-l">
            <button type="productbox-button" className="productbox-button">
              Login
            </button>
          </div>
        </div>
      </div>  
    );
  }

}
export default Login;