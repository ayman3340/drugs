import "./App.css";
import "jquery";
import "./fonts/Helvetica Neue LT Arabic.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Video from "./components/Video";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourSection from "./components/FourSection";
import FiveSection from "./components/FiveSection";
import Breaker from "./components/Breaker";
import Book from "./components/Book";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header></Header>
      
      <FirstSection></FirstSection>
      <Video></Video>
      <Breaker></Breaker>
      <SecondSection></SecondSection>
      <Breaker></Breaker>
      <ThirdSection></ThirdSection>
      <Breaker></Breaker>
      <Book></Book>
      <Breaker></Breaker>
      <FourSection></FourSection>
      <Breaker></Breaker>
      <FiveSection></FiveSection>
      <Breaker></Breaker>
      <Footer></Footer>
    </div>
  );
}

export default App;
