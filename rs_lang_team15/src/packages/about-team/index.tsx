import "./style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TeamList from "./team-list";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

export default function TeamBlock() {
  return (
    <div className="team-container">
      {TeamList.map((el, index) => (
        <Paper elevation={6} data-indexd={index}>
          <Card sx={{ maxWidth: 345 }} >
            <CardMedia
              component="img"
              height="350"
              image={el.photo}
              alt="avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {el.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {el.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.contribution}
              </Typography>
              <Link href={el.github} underline="none">
                {el.githubName}
              </Link>
            </CardContent>
          </Card>
        </Paper>
      ))}
    </div>
  );
}
