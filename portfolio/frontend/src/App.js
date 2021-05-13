import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Main from './Main';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/about" exact component={AboutPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
