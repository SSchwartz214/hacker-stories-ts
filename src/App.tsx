import * as React from "react"

type Story = {
  objectID: number
  title: string
  url: string
  author: string
  num_comments: number
  points: number
}


const App = () => {
  const stories = [
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

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search/>

      <hr/>

      <List list={stories} />
    </div>
  )
}

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

 return (
  <div>
    <label htmlFor='search'>Search: </label>
    <input type="text" id="search" onChange={handleChange} />

    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
  </div>
 )
}

type ListProps = {
  list: Story[]
}

const List = ({list}: ListProps) => {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item}/>
      )
      )}
    </ul>
  )
}

type ItemProps = {
  item: Story
}

const Item = ({item}: ItemProps) => {
  return (
    <li>
      <span>
        <a href={item.url}> {item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  )
}

export default App