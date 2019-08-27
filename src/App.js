import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Header } from './components';
import { About, NotFound, Todos } from './pages';
import Context from './store/context';

const App = () => {
  const [text, setText] = useState('');

  const showText = () => {
    const lorem = `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Laboriosam cumque soluta corrupti laudantium magni nihil,
      fugit neque rem exercitationem, quasi assumenda amet corporis sint consequatur.
      Sequi dolores magni totam pariatur!
    `;
    setText(lorem);
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/about" render={() =>
          <Context.Provider value={{ showText, text }}>
            <About />
          </Context.Provider>}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
