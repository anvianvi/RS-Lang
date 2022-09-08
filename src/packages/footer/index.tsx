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
        <Link
          href="https://github.com/Anastasia-pro"
          underline="hover"
          target="blank"
        >
          Nastasya
        </Link>
        <Link
          href="https://github.com/PDmitryY"
          underline="hover"
          target="blank"
        >
          Dmitry
        </Link>
        <Link
          href="https://github.com/anvianvi"
          underline="hover"
          target="blank"
        >
          Pavel
        </Link>
      </div>
      <Typography>© 2022</Typography>
    </div>
  );
}
