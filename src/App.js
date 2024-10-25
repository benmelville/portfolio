import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import CardCounter from './components/CardCounter';


const cardData = {
  card1: {
    cardName: "Benjamin Melville",
    description: "embedded software engineer",
  },
  card2: {
    cardName: "dave",
    description: "neuroscience",
  },
  card3: {
    cardName: "doug",
    description: "physics",
  },
}

// Create and arrange parts of app here
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <CardCounter />
        <div>
          <Card {...cardData.card1} />
          <Card {...cardData.card2} />
          <Card />
        </div>
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
