import MovieCard from "./MovieCard";
import type { IMovie } from "../types/movies";
interface IMoviesSectionProps {
    moviesData: IMovie[];
}

const MoviesSection = ({moviesData}: IMoviesSectionProps) => {
    return (
     <div className="mx-auto container">
           <div className=" gap-4 mt-7 md:mt-14 justify-between flex">
            {/* latest movies  */}
            <div className="w-3/4 flex justify-between item-center">
                 <h1 className="font-semibold text-gray-800  text-2xl"> Saved Movies</h1>
              <p className="text-[14px] text-gray-700">6 movies found</p>
             </div>
         
            {/* saved movies  */}
            <div className="w-1/4 flex justify-between item-center text-center">
                 <h1 className="font-semibold text-gray-800  text-2xl"> Saved Movies</h1>
              <p className="text-gray-700 text-[14px]">6 movies found</p>
             </div>
        </div>
           <div className="my-6 w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {
                moviesData.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id}/>
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