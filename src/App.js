import './App.css';
import Logo from './components/Logo';
import Page from './components/Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">   
      <Logo />
      <div className="wrapper">
        <Router>
          <Switch>
            <Route path="/" component={Page} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
