import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Homepage from './pages/Homepage'
import AboutWebsite from './pages/AboutWebsite'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/About" exact component={AboutWebsite}></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
