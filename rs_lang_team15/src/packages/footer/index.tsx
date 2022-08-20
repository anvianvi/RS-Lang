import "./style.css";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <div className="footer">
      <Link href="https://rs.school/js/" target="blank">
        <img
          src="./rs_school.svg"
          alt="rsschool logo"
          style={{
            height: "20px",
          }}
        />
      </Link>

      <div className="links-container">
        <Link href="https://github.com/Anastasia-pro" target="blank">
          Nastasya
        </Link>
        <Link href="https://github.com/PDmitryY">Dmitry</Link>
        <Link href="https://github.com/anvianvi" target="blank">
          Pavel
        </Link>
      </div>
      <Typography>© 2021</Typography>
    </div>
  );
}
