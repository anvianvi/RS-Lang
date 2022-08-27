import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import AccountMenu from "./accaunt-menu";
import "./style.css";
import {GoogleLogin} from '@react-oauth/google';

function Header() {
  return (
    <div className="header">
      <Link href="#"><img src="logo.svg" alt="notfound" className="logo" /></Link>
      <nav className="header-navigation">
        <Button variant="text">Textbook</Button>
        <Button variant="text">Minigames</Button>
        <Button variant="text">Statistic</Button>
      </nav>
      {/* depends on sign status we can show diferent buttons  */}
      <div className="sign-block">
        <Button variant="outlined">
        <div> <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/></div>

        </Button>
        <AccountMenu />
      </div>
    </div>
  );
}

export default Header;

