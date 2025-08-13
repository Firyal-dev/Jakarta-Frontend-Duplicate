import Header from "./components/Header";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Kalender from "./components/Kalender";
import Layanan from "./components/Layanan";
import DataInformasi from "./components/DataInformasi";
import BeritaDanSiaran from "./components/BeritaDanSiaran";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed w-full z-50 shadow-md">
        <Header />
        <Menu />
      </div>
      <div className="pt-[60px] md:pt-[80px]">
        <Hero />
        <Banner />
      </div>
      <div>
        <Layanan />
      </div>
      <div>
        <DataInformasi />
      </div>
      <div>
        <Kalender />
      </div>
      <div>
        <BeritaDanSiaran />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
