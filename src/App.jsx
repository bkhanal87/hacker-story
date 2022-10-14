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
const App = () => {
  /* here, can have implementation details */
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
    /* whatever is returned here resembles HTML but it is JSX code, the syntax that allows to combine JS and HTML. 
    While HTML can be used almost (except for the attribute) in its native way in JSX, everything in curly braces can be used to interpolate JS. */

    <div>
      <h1>{welcome.greeting} {getTitle('React')}</h1>

      <Search />

      <hr />

      <List list={stories} />
    </div>
  );
};

{/* Search component for label and input */}  
const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };

  return (
    <div>
      {/* htmlFor reflects the 'for' attribute in vanilla HTML. 
      Since JSX is closer to JS than to HTML, React uses the camelCase naming convention */}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} /> {/*always pass functions to these handlers, not the return value of the function, except when the return value is a function again.*/}
    </div>
  );
};

export default App;


{/* new List components created to encapsulate functionalities */}

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item}/>
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

