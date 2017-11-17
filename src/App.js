import React from "react";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Resume from "./pages/Resume";



let links = [
  {
name: "Home",
url: ""
  },
  {
  name: "Contact",
  url: "/Contact"
},
{
name: "Projects",
url: "/Projects"
},
{
name: "Resume",
url: "/Resume"
}
];

let App = () => (
  <div>

    <HashRouter>
      <div>
        <Navbar brand="FRANCIS BAIDOO" links={links}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Projects" component={Project}/>
          <Route exact path="/Resume" component={Resume}/>
          <Redirect to="/" />
        </Switch>

        <Footer />
      </div>
    </HashRouter>
  </div>

)
export default App
