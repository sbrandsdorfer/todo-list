import { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Items from './components/Items';

function App() {
  const [itemsList, setItemsList] = useState([]);

  function addItemToList(item){
    setItemsList([...itemsList, item]);
  }
  return (
    <div className="App">
      <AddItem addItemToList={addItemToList} />
      <Items itemsList={itemsList} />
    </div>
  );
}

export default App;
