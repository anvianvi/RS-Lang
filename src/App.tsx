import "./App.css";
import Header from "./packages/header";
import Footer from "./packages/footer";
import AdvatagesBlock from "./packages/advantages-block";
import TeamBlock from "./packages/about-team";
import ListOfWords from "./packages/list-of-words-with-pagination";
import SprintGame from "./packages/sprint-game";
import { Container } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import Statistics from "./packages/statistics";
import AudioGame from "./packages/audio-game";

const { PUBLIC_URL } = process.env;

function App() {

  return (
    <>
      <Header />
      <Container className="main-container">
        <Routes>
          <Route path={PUBLIC_URL} element={<AdvatagesBlock />} />
          <Route path={`${PUBLIC_URL}/Team`} element={<TeamBlock />} />
          <Route path={`${PUBLIC_URL}/Sprint`} element={<SprintGame />} />
          <Route path={`${PUBLIC_URL}/AudioGame`} element={<AudioGame />} />
          <Route path={`${PUBLIC_URL}/Textbook`} element={<ListOfWords />} />
          <Route path={`${PUBLIC_URL}/Statistics`} element={<Statistics />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
