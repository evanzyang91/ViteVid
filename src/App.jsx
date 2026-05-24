import React from 'react'
import Search from './components/Search.jsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img className="mt-4" src="./movies-gallery.png" alt="Site Banner"/>
          <h1>Browse your favourite movies. Built with <span className="text-gradient mt-8">Vite</span>.</h1>
        </header>

        <Search/>
      </div>
    </main>
  )
}

export default App