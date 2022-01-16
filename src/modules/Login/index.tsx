import React from "react";
import Site from "../../components/Site";
import './styles.css'

const Login: React.FC = () => {

  return (
    <Site noFooter= {false}>      
        <div className="login-container">
          <div className="login-form">
            <label className="login-form-label">Login</label>
            <div className="login-form-field">
              <label className="login-field-label">Email</label>
              <input className="login-field-input" placeholder="email..."/>
            </div>
            <div className="login-form-field">
              <label className="login-field-label">Password</label>
              <input className="login-field-input" placeholder="password..."/>
            </div>
            <button className="login-form-button">Login</button>
          </div>
        </div>
    </Site>

  );
};

export default Login;