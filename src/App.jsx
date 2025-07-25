import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery1 from "../components/Gallery1";
import Gallery2 from "../components/Gallery2";
import Gallery3 from "../components/Gallery3";
function App() {
  return (
    <>
      <Header />
      <Gallery1 />
      <Gallery2 />
      <Gallery3 />
      <Footer />
    </>
  );
}

export default App;
