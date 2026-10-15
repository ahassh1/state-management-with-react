import MovieCard from "./MovieCard";
import type { IMovie } from "../types/movies";
import { useState } from "react";
interface IMoviesSectionProps {
    moviesData: IMovie[];
}

const MoviesSection = ({moviesData}: IMoviesSectionProps) => {
    const [isSaved, setIsSaved] = useState<IMovie[]>([])
   const  handleSaveMovie = (movie: IMovie)=>{
    console.log(movie)
   }
    return (
     <div className="mx-auto container">
       
           <div className="my-6 w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {
                moviesData.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id} isSaved={isSaved} setIsSaved={setIsSaved} handleSaveMovie={handleSaveMovie}/>
                ))
             }
            </div>
            <div className="w-1/4">
                { ""}
            </div>
     </div>
    );
};
export default MoviesSection; 