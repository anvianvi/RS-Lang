import Button from "@mui/material/Button";
import AccountMenu from "./accaunt-menu";
import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignUpForm from "../sign-up-form";
import SignInForm from "../sign-in-form";

const { PUBLIC_URL } = process.env;

function Header() {
  return (
    <div className="header">
      <Link to={PUBLIC_URL}>
        <img src="logo.svg" alt="notfound" className="logo" />
      </Link>
      <nav className="header-navigation">
        <Link to={`${PUBLIC_URL}/Team`}>Team</Link>
        <Link to={`${PUBLIC_URL}/Sprint`}>Sprint Game</Link>
        <Link to={`${PUBLIC_URL}/Textbook`}>Textbook</Link>
        {/* <Link to={`${PUBLIC_URL}/Statistic`}>Statistic</Link> */}
      </nav>
      {/* depends on sign status we can show diferent buttons  */}
      <div className="sign-block">
        <Popup className="popup" trigger={<Button className="button"> Sign in </Button>} modal>
          <SignUpForm></SignUpForm>
        </Popup>
        <Popup className="popup" trigger={<Button className="button"> Log in </Button>} modal>
          <SignInForm></SignInForm>
        </Popup>
            <GoogleLogin
              onSuccess={credentialResponse => {
                const str = JSON.stringify(credentialResponse);
                localStorage.setItem('User', str)
              }}
              onError={() => {
                console.log("Login Failed");
              }
              }
              useOneTap
            />
        {/* <AccountMenu /> */}
      </div>
    </div>
  );
}

export default Header;
