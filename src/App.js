import './App.css';
import { getAnimes } from './api';
import Header from './components/Header/Header';

function App() {
  getAnimes()
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
