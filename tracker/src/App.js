import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router> 
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/Home' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
