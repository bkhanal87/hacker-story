import * as React from 'react';
import './App.css';


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
    </div>
  );
}

export default App;
