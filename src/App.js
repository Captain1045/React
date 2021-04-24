import logo from './logo.svg';
import './App.css';
import Test from './Test';
import TestClass from './TestClass'

function App() {
  return (
    <div className="App">
      <Test></Test>
      <TestClass></TestClass>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
