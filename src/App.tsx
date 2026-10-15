import './App.css'
import FilterSection from './components/FilterSection'
import MoviesSection from './components/MoviesSection'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
      <div>
        <Navbar/>
        <FilterSection/>
        <MoviesSection/>
      </div>
    </>
  )
}

export default App
