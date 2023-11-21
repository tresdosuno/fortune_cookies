import './App.css'
import quotes from "./db/data.json"
import getRandomIndex from "./utils/getRandomIndex"
import QuoteCard from "./components/QuoteCard.jsx"
import { useState } from 'react'

const backgrounds = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  
  const [quote, setQuote] = useState(getRandomIndex(quotes))
  const [bg, setBg] = useState(getRandomIndex(backgrounds))

  const handleChangeQuote = () => {
    setQuote(getRandomIndex(quotes))
    setBg(getRandomIndex(backgrounds))
  }

  return (
    <main className={`App ${bg}`}>
      <QuoteCard quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App
