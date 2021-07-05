import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.module.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <Router>
       <Header/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
       <Footer/>
    </Router>
  );
}

export default App;
