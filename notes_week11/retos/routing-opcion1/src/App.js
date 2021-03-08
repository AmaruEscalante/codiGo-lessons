import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { Layout } from './components/'
 
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
