import React from 'react'
import './App.css'
import SortedDogList from './containers/SortedDogList'
import Header from './components/Header'

const App = () => (
  <div className="App">
    <header className="">
      <h3>DOGES!</h3>
      <Header />
    </header>
    <SortedDogList />
    <footer className="App-footer">
      <h3>That Was DOGES!</h3>
    </footer>
  </div>
)

export default App
