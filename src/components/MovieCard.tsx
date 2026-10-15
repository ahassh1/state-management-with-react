import type { IMovie } from "../types/movies";

const MovieCard = ({movie}: {movie:IMovie}) => {
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
            <button className="btn  btn-neutral rounded-md hover:bg-gray-200 hover:text-black">Add movie</button>
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
