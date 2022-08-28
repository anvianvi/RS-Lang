import Header from "./packages/header";
import SignInForm from "./packages/sign-in-form";
import SignUpForm from "./packages/sign-up-form";
import Footer from "./packages/footer";
import AdvatagesBlock from "./packages/advantages-block";
import TeamBlock from "./packages/about-team";
import ListOfWords from "./packages/list-of-words-with-pagination";

function App() {
  return (
    <>
    <Header />
    <ListOfWords />
    <AdvatagesBlock />
    <TeamBlock />
    <Footer />
    <SignInForm />
    <SignUpForm />
    </>
  );
}

export default App;
