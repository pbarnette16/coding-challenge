import logo from './components/images/adslot_black.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Adslot" />
      </header>
      <article>
        <header>
          <h1>Bookings</h1>
        </header>
      </article>
    </div>
  );
}

export default App;
