// type Item = {
//   title: string
//   url: string
//   author: string
//   num_comments: number
//   points: number
//   objectID: number
// }

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

type ItemProps = {
  item: {
    title: string
    url: string
    author: string
    num_comments: number
    points: number
    objectID: number
  }
}
function Item({item}: ItemProps) {
  return (
    <li>
      <span>{item.title}</span>
      <span><a href={item.url} /></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  )
}

function List() {
 return (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item}/>
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