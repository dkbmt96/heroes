
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Heroes from './components/Heroes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Heroes} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
}

export default App;

