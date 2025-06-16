type Item = {
  title: string
  url: string
  author: string
  num_comments: number
  points: number
  objectID: number
}

const list1 = [
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

  const list2 = [
    {
    title: 'Python',
    url: 'https://python.dev/',
    author: 'Bob Man',
    num_comments: 4,
    points: 5,
    objectID: 2,
    },
    {
    title: 'Ruby',
    url: 'https://ruby.org/',
    author: 'DHH',
    num_comments: 7,
    points: 6,
    objectID: 3,
    },
  ];

const App = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search/>

      <hr/>

      <List list={list1} />
      <List list={list2} />
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
const Item = ({item}: ItemProps) => (
  <li>
    <span>{item.title}</span>
    <span><a href={item.url} /></span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
)

type ListProps = {
  list: Item[]
}

const List = ({list}: ListProps) => (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item}/>
      )
      )}
    </ul>
)


const Search = () => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input type="text" id="search" />
  </div>
)

export default App