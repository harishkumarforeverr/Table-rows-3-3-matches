import Header from "../../Common/Header/Header";
import Footer from "./Footer/Footer";
import HomeIntroPage from "./HomeIntroPage/HomeIntroPage";
import "./HomePage.scss";
import HomePageServices from "./HomePageServices/HomePageServices";
import PdfViewer from "./PdfViewer/PdfViewer";

const HomePage = () => {


  return (
    <div className="HomePage_container">
        <Header/>
        <HomeIntroPage/>
        <HomePageServices/>
        <PdfViewer/>
        <Footer/>
    </div>
  );
};
export default HomePage;
