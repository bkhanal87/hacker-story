import * as React from 'react';

// function getTitle(title) {
//   return title;
// }


// const title = 'React';

// const[searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');

const useStorageState = (key, initialState) => {
  const[value, setValue] = React.useState(
    localStorage.getItem(key) || initialState // key added here to prevent overwrite of the "value"-allocated item in the local storage
);

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

// const[searchTerm, setSearchTerm] = useStorageState('React'); // creating a custom hook to keep the component's state in sync with the browser's local storage.

  

// React's useEffect Hook to trigger the desired side-effect each time the searchTerm changes
// React.useEffect(() => {
//   localStorage.setItem('search', 'searchTerm');
// }, [searchTerm]);

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

  // callback handler in JSX - step A
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  
  const handleSearch = (event) => {

    // D
    setSearchTerm(event.target.value);
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

const Search = ({ search, onSearch }) =>
(
  <>
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
  </>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) =>
      <Item 
      key={item.objectID} 
      item={item} />
    )}
  </ul>
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