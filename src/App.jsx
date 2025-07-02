import Navbar from "./components/nav/Navbar";
import Hero from "./components/pages/Hero";
import Footer from "./components/footer/Footer";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container-fluid py-3 py-md-5">
        <div>
          <Hero />
        </div>
        <div className="my-5">
          <Footer />
        </div>
      </div>
      <div
        className="d-flex justify-content-center text-white"
        style={{ backgroundColor: "skyblue" }}
      >
        <h3>&copy;{currentYear} rvgowtham : All rights reserved.</h3>
      </div>
    </>
  );
}

export default App;
