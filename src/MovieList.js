import MovieCard from "./MovieCard";


/**
 * Description placeholder
 *
 * @param {{ MoviesTable: movies[]; }} param0
 * @param {movies[]} param0.MoviesTable
 * @returns {MovieCards list}
 */
function MovieList ({MoviesTable}) {
    return(
        MoviesTable.map(j => {
            let object = JSON.parse(j);
            return <MovieCard Title = {object.title} Description={object.description} PosterURL={object.posterURL} Rating={object.rating} key = {object.title}></MovieCard>
        })
    );
}

export default MovieList;