import FilmObjectType from './types/FilmObjectType';
import SocialBtns from './SocialBtns';
import Stars from './Stars';

const FilmItem = (film : FilmObjectType) => {
    const poster = film.poster ? <img src={film.poster} alt={film.name}/> : false;
    const buyBtn = film.price ? <button className='film-item__btn buy'>Купить {film.price}</button> : false;

    return (
        <div className='film-item'>
            <div className='film-item__left'>
                <span className='film-item__genre'>
                    {film.genre}
                </span>
                <div className='film-item__img'>
                    {poster}
                </div>
            </div>
            <div className='film-item__right'>
                <SocialBtns />
                <span className='film-item__name'>{film.name}</span>
                <Stars key={film.id + '_rating'} count={film.rating}/>
                <div className='film-item__btns'>
                    {buyBtn}
                    <button className='film-item__btn more'>
                        <span>Подробнее</span>
                        <span className='material-icons'>arrow_right_alt</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilmItem;