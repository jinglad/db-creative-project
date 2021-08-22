import CompanyWorkedWith from "../CompanyWorkedWith/CompanyWorkedWith";
import ContactUs from "../ContactUs/ContactUs";
import FeedBack from "../FeedBack/FeedBack";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import { HomeContainer } from "./home.style";

function Home() {
  return (
    <HomeContainer>
      <Header />
      <CompanyWorkedWith />
      <Services />
      <Projects />
      <FeedBack />
      <ContactUs />
    </HomeContainer>
  );
}

export default Home;
