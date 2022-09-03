import "./style.css";
import Parser from "html-react-parser";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import IconButton from "@mui/material/IconButton";
import { useState, useMemo, useEffect } from "react";
import Pagination from "./pagination";
// import playAudio from "./playAudio";
import { getWords } from "../../api";
import { Word } from "../../interfaces";

const URL = "https://rs-lang-team15.herokuapp.com/";
const PageSize: number = 20;
const PageCount: number = 29;

export default function ListOfWords() {
  const [currentPage, setCurrentPage] = useState(1);
  const [words, setWords] = useState<Word[] | undefined>();
  const [count, setCount] = useState(1);
  useEffect(() => {
    const fetchWords = async () => {
      const fetchedWords = await getWords(1, currentPage);
      setWords(fetchedWords);
    };
    fetchWords();
  }, [currentPage]);

  useEffect(() => {
    if (words) {
      setCount(words.length*PageCount);
    }
  }, [words]);

  const currentTableData = useMemo(() => {
    if (words) {
      return words;
    }
  }, [words]);

  return (
    <div className="cards-container">
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={count}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />

      {currentTableData?.map((el) => (
        <Paper elevation={6} className="word-contaier" key={el.id} id={el.id}>
          <div className="word-container-header">
            <Avatar
              alt={el.word}
              src={URL + el.image}
              sx={{ width: 120, height: 120 }}
            />
            <div className="wodr-box">
              <Typography variant="h5">
                {el.word}
                <IconButton
                  className="card-voise-button"
                  color="primary"
                  onClick={() => {
                    let audioWord = new Audio(URL + el.audio);
                    audioWord.play();
                  }}
                >
                  <VolumeUpIcon />
                </IconButton>
              </Typography>
              <Typography variant="subtitle2">{el.transcription}</Typography>
              <Typography variant="body1" className="card-translation">
                {el.wordTranslate}
              </Typography>
            </div>
          </div>
          <Typography variant="body1">
            <IconButton
              className="card-voise-button"
              color="primary"
              onClick={() => {
                let audioWord = new Audio(URL + el.audioMeaning);
                audioWord.play();
              }}
            >
              <VolumeUpIcon sx={{ fontSize: 20 }} />
            </IconButton>
            {Parser(el.textMeaning)}
          </Typography>
          <Typography variant="body2" className="card-translation">
            {el.textMeaningTranslate}
          </Typography>
          <Typography variant="body1">
            <IconButton
              className="card-voise-button"
              color="primary"
              onClick={() => {
                let audioWord = new Audio(URL + el.audioExample);
                audioWord.play();
              }}
            >
              <VolumeUpIcon />
            </IconButton>
            {Parser(el.textExample)}
          </Typography>
          <Typography variant="body2" className="card-translation">
            {el.textExampleTranslate}
          </Typography>
        </Paper>
      ))}
    </div>
  );
}
