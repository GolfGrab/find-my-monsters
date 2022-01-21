import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      title: '',
    }

    // this.handleChangeFunc = this.handleChangeFunc.bind(this)
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChangeFunc = (e) => {
    this.setState({ searchField: e.target.value,title : e.target.value })
  }

  render() {
    const { monsters, searchField ,title} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )


    return (
      <div className="App">
        <h1>Find My Monsters</h1>
        <h1>▶▶▶ {title} ◀◀◀</h1>


        <SearchBox
          placeholder="search monster"
          handleChangeFunc={this.handleChangeFunc}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }


}
export default App;
