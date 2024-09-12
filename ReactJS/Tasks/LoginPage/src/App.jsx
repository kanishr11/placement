// import { Login } from "./components/Login"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing } from "./components/Landing/Landing"
import { Navbar } from "./components/Navbar/Navbar"
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {

  return (
    <Router>
      <Navbar/>
    <Switch>
      <Route path="/" exact component={<Landing/>} />
      <Route path="/about" component={<About/>} />
      <Route path="/contact" component={<Contact/>} />
    </Switch>
  </Router>
  )
}

export default App
