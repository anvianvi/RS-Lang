import "./style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AdvantagesList from "./advantages-list";
import Paper from "@mui/material/Paper";

export default function AdvatagesBlock() {
  return (
    <div className="advantage-block-container">
      <div className="about app">
        <p>
          Our app is designed to help you learn English and increase your vocabulary. 
          In the Textbook tab you can find 3600 frequently used English words with translation, transcription, usage examples and audio. 
          All words are divided into 6 sections of 30 pages. Playing games will help you consolidate the learned words and keep them in your memory.
        </p>
        <p>
          We tried very hard to make the best app for you but unfortunately, due to the circumstances, the application is not finished yet and needs to be improved.
          It would be great if you give us at least a couple more days to finalize app.
        </p>
      </div>
      {AdvantagesList.map((el, index) => (
          <Paper elevation={5} data-indexd={index} key={el.title + "id"}>
            <Card sx={{ maxWidth: 330 }} className="card-container">
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
            </Card>
          </Paper>
      ))}
    </div>
  );
}
