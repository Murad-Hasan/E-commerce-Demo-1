import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.module.css';
import Home from './Pages/Home/Home';
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
    </Router>
  );
}

export default App;
