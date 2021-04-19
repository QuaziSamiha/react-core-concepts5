import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 

function App() {
  return (
    <div className="App">
      
      <MovieCounter></MovieCounter>
      <MovieCounter></MovieCounter>
      <MovieCounter></MovieCounter>
      <MovieCounter></MovieCounter>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {

  // const total = useState(0);
  // console.log(total);

  let [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  const divStyle = {
    border: '3px solid gray',
    borderRadius: '10px',
    margin: '10px',
    width: '200px'
  }
  const btnStyle = {
    padding: '5px',
    color: 'lightgray',
    backgroundColor: 'salmon',
    marginBottom: '8px'
  }
  return (
    <div style={divStyle}>
      <h5>Number of movies: {count}</h5>
      <button style={btnStyle} onClick={handleClick}>Add Movie</button>
      <MovieDisplay movies={count + 3}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return (
    <div>
      <h4>Movies I have acted: {props.movies}</h4>
    </div>
  )
}


export default App;
