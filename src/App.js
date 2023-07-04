import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from '../src/ItemListContainer/ItemListContainer';
function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a mi e-commerce"/>
    </div>
  );
}

export default App;
