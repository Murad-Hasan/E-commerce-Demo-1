import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.module.css';
import Header from './Shared/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Header/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
