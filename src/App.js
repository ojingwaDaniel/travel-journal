import './App.css';
import NavBar from './components/nav';
import Card from './components/card';
import data from './data';
function App() {
  const dataElement = data.map(item => {
    return <Card {...item} />;
    
  })
  return (
    <div className="App">
      <NavBar />
      {dataElement}
    </div>
  );
}

export default App;
