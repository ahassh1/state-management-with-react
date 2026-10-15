import type { IMovie } from "../types/movies";
interface IMovieCardProps{
    movie:IMovie,
    handleSaveMovie: (movie: IMovie) => void,
    isSaved: IMovie[],
    setIsSaved:React.Dispatch<React.SetStateAction<IMovie[]>>
}
const MovieCard = ({movie, handleSaveMovie, isSaved, setIsSaved}: IMovieCardProps) => {
    const handleOnClick= ()=>{
        handleSaveMovie(movie)
        const filterMovies = isSaved.filter((saved)=> saved.id !== movie.id)   //remove duplicate (filter)
        const updateMovies = [...filterMovies, movie]
        setIsSaved(updateMovies)  //set in the state
    }
    console.log(isSaved);
    
    return (
        <div>
           <div className="card bg-base-100 shadow-lg">
  <figure>
    <img
    width={120}
    height={100}
    className="object-cover"
      src={movie.image}
      alt="movie-image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {movie.title}
      <div className="badge badge-secondary">{movie.imdbRating}</div>
    </h2>
    <p>{movie.description.split(" ").slice(0,20).join(" ").toLowerCase()}</p>
    <div className="card-actions flex justify-between items-center">
        <div>
            <button onClick={handleOnClick} className="btn  btn-neutral rounded-md hover:bg-gray-200 hover:text-black">Add movie</button>
        </div>
      <div className="space-x-2">
          <div className="badge badge-outline">{movie.director.split(" ").slice(0,1).join(" ")}</div>
      <div className="badge badge-outline">{movie.genres.split(" ").slice(0,1).join(" ")}</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default MovieCard;
