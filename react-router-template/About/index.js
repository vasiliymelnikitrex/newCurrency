import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Company from './Company';
import Social from './Social';

function About() {
  return (
    <div className="About">
      About
      <nav>
        <Link to="/about/company" >Company</Link>
        <Link to="/about/social" >Social</Link>
      </nav>
      <Switch>
        <Route path="/about/company" component={Company} />
        <Route path="/about/social" component={Social} />
      </Switch>
    </div>
  );
}

export default About;
