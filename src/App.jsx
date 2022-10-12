import React from 'react'
import './App.css'


const title = 'React';

/* remove boilerplate code and reduce the component to a lightweight version.
App is basically a JavaScript function aka a functional component. defined in PascalCase. */
function App() {
  /* here, can have implementation details */

  return (
    /* whatever is returned here resembles HTML but it is JSX code, the syntax that allows to combine JS and HTML */
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
