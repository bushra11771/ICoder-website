import "./App.css";
// import Use from "./components/Use";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/home" component={Content} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
