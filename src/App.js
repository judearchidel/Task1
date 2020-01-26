import React from 'react';
import Table from './Table/Table';
import './App.css';

function App() {
  const table = [
    {
      name: 'item',
      inputType: 'select'
    },
    {
      name: 'Material Fee',
      inputType: 'currency' 
    },
    {
      name: 'Packing Fee',
      inputType: 'currency'
    },
    {
      name: 'Unpacking Fee',
      inputType: 'currency'
    }
  ]
  return (
    <div className="App">
      <Table tab={table}></Table>
    </div>
  );
}

export default App;
