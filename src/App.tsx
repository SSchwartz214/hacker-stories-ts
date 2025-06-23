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

  const [searchTerm, setSearchTerm] = React.useState('React')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories =  stories.filter((story) => (story.title.toLowerCase().includes(searchTerm.toLowerCase())))

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr/>

      <List list={searchedStories} />
    </div>
  )
}

type SearchProps = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  search: string
}
const Search = ({onSearch, search}: SearchProps) => {
 return (
  <div>
    <label htmlFor='search'>Search: </label>
    <input type="text" id="search" onChange={onSearch} value={search} />
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