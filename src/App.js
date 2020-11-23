import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <div className="site-content">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/contact" component={ContactPage}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
);


export default App;
