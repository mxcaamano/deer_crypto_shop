import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App bg-black">
      <link rel="stylesheet" href="App.css"></link>
      <Navbar/>
      <ItemListContainer greeting="ItemListContainer"/>
    </div>
  );
}

export default App;
