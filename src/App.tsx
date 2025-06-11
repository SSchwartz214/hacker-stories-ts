type Item = {
  title: string
  url: string
  author: string
  num_comments: number
  points: number
  objectID: number
}

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

      <Search/>

      <hr/>

      <List />
    </div>
  )
}

function Item({objectID, title, url, author, num_comments, points}: Item) {
  return (
    <li key={objectID}>
      <span>{title}</span>
      <span><a href={url} /></span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  )
}

function List() {
 return (
  <ul>
    {list.map((item) => (
      <Item
        objectID={item.objectID}
        title={item.title}
        url={item.url}
        author={item.author}
        num_comments={item.num_comments}
        points={item.points}
      />
    )
    )}
  </ul>
 )
}

function Search() {
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input type="text" id="search" />
    </div>
  )
}

export default App