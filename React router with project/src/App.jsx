import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />

      <h1 className="text-center text-2xl">Hello World</h1>

      <Footer />
    </>
  );
}

export default App;
