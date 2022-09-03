import Button from "@mui/material/Button";
import AccountMenu from "./accaunt-menu";
import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

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
        <Button variant="outlined">
          <div>
            {" "}
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </div>
        </Button>
        <AccountMenu />
      </div>
    </div>
  );
}

export default Header;
