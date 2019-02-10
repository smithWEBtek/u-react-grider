import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>Page One
      <Link to='/pagetwo'>go to page 2</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div><h2>Page Two</h2>
      <button><Link to='/'>HOME</Link></button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={PageOne} />
          <Route path='/pagetwo' component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
