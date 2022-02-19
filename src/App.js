import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home  from './components/Home.jsx'
import Detail from './components/Detail.jsx';

function App() {
  return (
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/detail/:id">
      <Detail />
    </Route>
  </Switch>
  );
}

export default App;
