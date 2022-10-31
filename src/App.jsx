import * as React from 'react';

const useStorageState = (key, initialState) => {
  const[value, setValue] = React.useState(
    localStorage.getItem(key) || initialState // key added here to prevent overwrite of the "value"-allocated item in the local storage
);

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const initialStories = [
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

const App = () => {
  
  // callback handler in JSX - step A
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  const [stories, setStories] = React.useState(initialStories);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  }
  
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

      <InputWithLabel 
        id="search"
        // label="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
      <strong>Search:</strong>
      </InputWithLabel>
      {/* B
      <Search  search={searchTerm} onSearch={handleSearch} /> */}
      
      <hr />

      <List list={searchedStories} onRemoveItem = {handleRemoveStory} />

    </div>
  );
};

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      autoFocus={isFocused}
      onChange={onInputChange}
    />
  </>
);

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item 
        key={item.objectID} 
        item={item} 
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item)
  }
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={handleRemoveItem}> {/* we could have used an inline arrow function or the bind method here but this approach is better for debugging purposes.*/}
          Dismiss
        </button>
      </span>
    </li>
  );
};

export default App;