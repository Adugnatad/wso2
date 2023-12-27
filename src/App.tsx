import "./App.css";
import Api from "./components/Api";
import Customer from "./components/Customers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Carousel from "./components/carousel";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Api />
      <Customer />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
