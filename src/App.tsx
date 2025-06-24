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

  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') ?? 'React')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories =  stories.filter((story) => (story.title.toLowerCase().includes(searchTerm.toLowerCase())))

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

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
const Search = ({onSearch, search}: SearchProps) => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input type="text" id="search" onChange={onSearch} value={search} />
  </div>
)

type ListProps = {
  list: Story[]
}

const List = ({list}: ListProps) => {
  return (
    <ul>
      {list.map(({ objectID, ...item}) => (
        <Item key={objectID} {...item}/>
      )
      )}
    </ul>
  )
}

type ItemProps = {
  title: string
  url: string
  author: string
  num_comments: number
  points: number
}

const Item = ({title, url, author, num_comments, points}: ItemProps) => {
  return (
    <li>
      <span>
        <a href={url}> {title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  )
}

export default App