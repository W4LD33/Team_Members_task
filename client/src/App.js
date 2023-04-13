import React from 'react'
import './App.css'

import Sidebar from './components/Sidebar';
import DepartmentList from './components/Departments/DepartmentList';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
    <div className='main'>
      <Sidebar />
      <DepartmentList />
    </div>
    </GlobalProvider>
)
}

export default App
