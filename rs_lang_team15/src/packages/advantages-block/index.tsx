import "./style.css";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AdvantagesList from "./advantages-list";
import Paper from "@mui/material/Paper";

export default function AdvatagesBlock() {
  return (
    <div className="advantage-block-container">
      {AdvantagesList.map((el, index) => (
        <Paper elevation={5}>
        <Card sx={{ maxWidth: 330 }} data-index={index} className="card-container">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={el.icon}
              alt={el.title}
              className="advantages-card-image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Paper>
      ))}
    </div>
  );
}
