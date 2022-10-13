import * as React from 'react';
import './App.css';

// create list here
const list = [
  {
    title: 'react',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


const welcome = {
greeting: "Hey",
};

function getTitle(title) {
return title;
}

/* remove boilerplate code and reduce the component to a lightweight version.
App is basically a JavaScript function aka a functional component. defined in PascalCase. */
function App() {
  /* here, can have implementation details */

  return (
    /* whatever is returned here resembles HTML but it is JSX code, the syntax that allows to combine JS and HTML. 
    While HTML can be used almost (except for the attribute) in its native way in JSX, everything in curly braces can be used to interpolate JS. */

    <div>
      <h1>{welcome.greeting} {getTitle('React')}</h1>

      {/* htmlFor reflects the 'for' attribute in vanilla HTML. 
      Since JSX is closer to JS than to HTML, React uses the camelCase naming convention */}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map(function (item) {
          return (
          <li key={item.objectID}>
            <span>
              <a href= {item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        )})}
      </ul>

    </div>
  );
}

export default App;
