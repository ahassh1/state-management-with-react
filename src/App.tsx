import { Suspense } from 'react'
import './App.css'
import MainComponent from './components/MainComponent'
import type { IMovie } from './types/movies'
function App() {
  const moviePromise: Promise<IMovie[]> = fetch("/data.json")
  .then((res)=>{
    if(!res.ok)
{      throw new Error("error find")}
    return  res.json()
  })


    return (
    <>
      <div>
      <Suspense fallback={<p>loading .....</p>}> 
         <MainComponent moviePromise={moviePromise}/>
      </Suspense>
      </div>
    </>
  )
}

export default App