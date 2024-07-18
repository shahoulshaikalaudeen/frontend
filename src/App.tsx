import React from 'react';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Item Management</h1>
      <AddItemForm />
      <ItemList />
    </div>
  );
};

export default App;
