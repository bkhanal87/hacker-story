import * as React from 'react';

function getTitle(title) {
  return title;
}


// const title = 'React';

const App = () => {
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

  const[searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');

  // React's useEffect Hook to trigger the desired side-effect each time the searchTerm changes
  React.useEffect(() => {
    localStorage.setItem('search', 'searchTerm');
  }, [searchTerm]);

  // callback handler in JSX - step A
  const handleSearch = (event) => {

    // D
    setSearchTerm(event.target.value);

    // using the local storage to store the searchTerm

  localStorage.setItem('search', event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>

      {/* B */}
      <Search  search={searchTerm} onSearch={handleSearch} />
      
      <hr />

      <List list={searchedStories}/>

      
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((item) =>
      <Item 
      key={item.objectID} 
      item={item} />
    )}
  </ul>
);

const Search = ({search, onSearch}) => 

// (
// {
//   // perform a task in between
//   // let searchTerm = '';

//   // event handler
//   const handleChange = (event) => {
//     // synthetic event
//     // console.log(event);
//     // value of target (here: Input HTML element)
//     // console.log(event.target.value);
//     setSearchTerm (event.target.value);
//     // searchTerm = event.target.value;

//     // C
//     props.onSearch(event);
//   }


(
  <div>
    <label
      htmlFor="search">
      Search:
    </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
    {/* <p>
        Searching for <strong>{searchTerm}</strong>
      </p> */}
  </div>
);


const Item = ({item}) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

export default App;