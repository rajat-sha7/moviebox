import '../assets/scss/components/movieCard.scss';

const MovieCard = ({id,  img }) => {  
  return (
      <div >
        <figure className="card__fig">
          <img src={img} alt="Movie Poster" className="card__img" />
        </figure>        
      </div>
  );
};

export default MovieCard;
