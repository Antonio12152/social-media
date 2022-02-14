import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header />
      <Main />
      <Navigation />
      </div>
    </div>
  );
}

export default App;
