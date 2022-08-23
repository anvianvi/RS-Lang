import "./style.css";
import Parser from "html-react-parser";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextBookWordsList from "./example-of-data";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import IconButton from "@mui/material/IconButton";

const URL = "https://react-learnwords-example.herokuapp.com/";

function playAudio(e: string) {
  const audio = new Audio(URL + e);

  function togglePause() {
    if (audio.paused && audio.currentTime > 0 && !audio.ended) {
      audio.pause();
      console.log("playing");
    } else {
      console.log("paused");
      audio.play();
    }
  }
  togglePause();
}

export default function ListOfWords() {
  return (
    <Paper elevation={6} className="word-contaier" id={TextBookWordsList[0].id}>
      <div className="word-container-header">
        <Avatar
          alt={TextBookWordsList[0].word}
          src={URL + TextBookWordsList[0].image}
          sx={{ width: 120, height: 120 }}
        />
        <div className="wodr-box">
          <Typography variant="h5">
            {TextBookWordsList[0].word}
            <IconButton
              className="card-voise-button"
              color="primary"
              onClick={() => {
                playAudio(TextBookWordsList[0].audio);
              }}
            >
              <VolumeUpIcon />
            </IconButton>
          </Typography>
          <Typography variant="subtitle2">
            {TextBookWordsList[0].transcription}
          </Typography>
          <Typography variant="body1" className="card-translation">
            {TextBookWordsList[0].wordTranslate}
          </Typography>
        </div>
      </div>
      <Typography variant="body1">
        <IconButton
          className="card-voise-button"
          color="primary"
          onClick={() => {
            playAudio(TextBookWordsList[0].audioMeaning);
          }}
        >
          <VolumeUpIcon sx={{ fontSize: 20 }} />
        </IconButton>
        {Parser(TextBookWordsList[0].textMeaning)}
      </Typography>
      <Typography variant="body2" className="card-translation">
        {TextBookWordsList[0].textMeaningTranslate}
      </Typography>
      <Typography variant="body1">
        <IconButton
          className="card-voise-button"
          color="primary"
          onClick={() => {
            playAudio(TextBookWordsList[0].audioMeaning);
          }}
        >
          <VolumeUpIcon />
        </IconButton>
        {Parser(TextBookWordsList[0].textExample)}
      </Typography>
      <Typography variant="body2" className="card-translation">
        {TextBookWordsList[0].textExampleTranslate}
      </Typography>
    </Paper>
  );
}
