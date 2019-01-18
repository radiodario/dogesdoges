import React, { Component } from 'react';
import './App.css';
import Dog from './Dog.js';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dogs : {},
    }
  }

  componentWillMount() {
    this.loadDogs();
  }

  async loadDogs() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    try {
      const response = await fetch(url);
      const { message } = await response.json();
      this.setState({ dogs : message })
    } catch (e) {
      return e.message;
    }
  }

  render() {
    const dogs = this.state.dogs;

    const dogViews = []

    Object.keys.call(null, dogs)
      .map(breed => {
        const subBreeds = dogs[breed];

        if (!subBreeds.length) {
          return dogViews.push(<Dog key={breed} breed={breed}/>)
        } else {
          return subBreeds.map(subBreed => {
            dogViews.push(<Dog
              key={`${breed}-${subBreed}`}
              breed={breed}
              subBreed={subBreed}
            />)
          })
        }
      })


    return (
      <div className="App">
        <header className="">
          <h3>DOGES!</h3>
        </header>
        <div className="Container">
          <div className="Container-Controls">
          </div>
          <div className="Container-Dogslist">
            {dogViews}
          </div>
        </div>
        <footer className="App-footer">
          <h3>That Was DOGES!</h3>
        </footer>
      </div>
    );
  }
}

export default App;
