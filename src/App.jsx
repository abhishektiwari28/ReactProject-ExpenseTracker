import React from "react"
import { Header } from './components/Header';
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TranscationList } from "./components/TranscationList";
import { AddTranscation } from "./components/AddTranscation";

import { GlobalProvider } from "./context/GlobalState";

import './App.css'

function App() { 
  
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranscationList />
        <AddTranscation />
      </div>
    </GlobalProvider>
  )
}

export default App
