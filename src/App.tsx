import "./App.css";
import Header from "./packages/header";
import Footer from "./packages/footer";
import AdvatagesBlock from "./packages/advantages-block";
import TeamBlock from "./packages/about-team";
import ListOfWords from "./packages/list-of-words-with-pagination";
import SprintGame from "./packages/sprint-game";
import { Container } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./packages/sign-up-form";
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
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
