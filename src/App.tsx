function getTitle(title: string) {
  return title
}

const animals = ['tiger', 'bear', 'moose']

function App() {
  return (
    <div>
      <h1>
        Hello {getTitle('React')}
      </h1>

      <ul>
        {animals.map((animal) =>
          <li>{animal}</li>
        )}
      </ul>
      <label htmlFor='search'>Search: </label>
        <input type="text" id="search" />
    </div>
  )
}

export default App