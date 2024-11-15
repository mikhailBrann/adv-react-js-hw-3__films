import FilmItem from './FilmItem';
import filmsData from './filmsData';

const FilmList = () => {
    const films = filmsData.map(movie  => <FilmItem {...movie} key={movie.id} />);

    return (
        <div className='film-list'>
            {films}
        </div>
    );
}

export default FilmList;