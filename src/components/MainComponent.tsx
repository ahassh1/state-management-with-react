import { use } from "react";
import FilterSection from "./FilterSection";
import MoviesSection from "./MoviesSection";
import Navbar from "./Navbar";
import type { IMovie } from "../types/movies";
interface IMoviePromiseProps{
    moviePromise: Promise<IMovie[]>
}

const MainComponent = ({moviePromise}:IMoviePromiseProps) => {
    const moviesData = use(moviePromise)
    
    return (
        <div>
           <Navbar/>
        <FilterSection/>
        <MoviesSection moviesData={moviesData}/>            
        </div>
    );
};

export default MainComponent;