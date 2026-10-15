const MoviesSection = () => {
    return (
        <div className="mx-auto container mt-7 md:mt-14 justify-between flex">
            {/* latest movies  */}
            <div className="w-3/4">
              <h1 className="font-semibold text-2xl text-gray-800">Latest Movies</h1>
            </div>
            {/* saved movies  */}
            <div className="w-1/4 text-2xl font-semibold text-gray-800">
              <h1> Saved Movies</h1>
            </div>
        </div>
    );
};
export default MoviesSection;