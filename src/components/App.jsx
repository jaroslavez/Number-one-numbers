import { useState } from 'react'
import './App.scss'

import Header from './Header/Header';
import Task from './Task/Task';
import Table from './Table/Table';

export default function App() {

  return (
    <main className='main-container'>
      <Header />
      <Task />
      <Table />
    </main>
  )
}
