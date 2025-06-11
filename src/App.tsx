const list = [
  {
  title: 'React',
  url: 'https://react.dev/',
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

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input type="text" id="search" />

      <hr/>

      <ul>
        {list.map((item) =>
            <li key={item.objectID}>{item.title}
              <span><a href={item.url} /></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
           </li>
        )}
      </ul>
    </div>
  )
}

export default App