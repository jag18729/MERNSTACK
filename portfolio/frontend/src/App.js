import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
