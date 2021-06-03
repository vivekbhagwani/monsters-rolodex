import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    const apiUrl = `https://jsonplaceholder.typicode.com/users`
    fetch(apiUrl)
    .then( res => res.json())
    .then(users => this.setState({ monsters: users }))
  }
  
  render() {
    const filteredMonsters = this.state.monsters.filter(mo => 
      mo.name.toLowerCase().includes(this.state.search.toLowerCase())
    )
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-heading'>Monsters Rolodex</h1>
          <SearchBar
            placeholder='search monsters' 
            handleChange={e => {
              this.setState({ search: e.target.value })
              console.log(e.target.value)
            }}
          />
          <CardList 
            monsters={filteredMonsters} 
          />

          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App
