import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Counter from './Counter';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/contacts" >Contacts</Link>
          <Link to="/about" >About</Link>
        </nav>
          <Route path="/" exact component={Home} />{/* показать exact */}
          <Route path="/contacts" component={Contacts} />
          <Route path="/contacts/:id" component={Counter} />
          <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
