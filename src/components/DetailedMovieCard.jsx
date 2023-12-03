import '../assets/scss/pages/detailsCard.scss';
import { FaPlay } from 'react-icons/fa'
// import PropTypes from 'prop-types';

const DetailMovieCard = ({data}) => { 
 
  const backdropUrl = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces';  return (
    <div className="detail">      
      <div className="detail__inner">
        <div className="detail__backdrop">
          <img
            src={backdropUrl + data.backdrop_path}
            alt="Backdrop Poster"
          />
          <div className="detail__desc">
            <h3 className="detail__title">{data.title}</h3>
            <ul>
            {data.genres?.map((genre, index) => {
                return (
                  <li key={index} className="detail__genres">
                    {genre.name}
                  </li>
                );
              })}
            </ul>
            <p className="detail__overview">{data.overview}</p>
            <ul className="detail__labels">
              <li className="detail__label">2013</li>

              {data.runtime?(<li className="detail__label">{data.runtime+" Minutes"}</li>):""}
            </ul>
            <ul className="detail__audio">
              {data.spoken_languages?.map((lang, index) => {
                return (
                  <li key={index} className="detail__lang">
                    {lang.english_name}
                  </li>
                );
              })}
            </ul>
            <button className="detail__backdrop__watchbtn"><span>Watch Now</span> <FaPlay /></button>
          </div>
        </div>
      </div>
      {console.log(data)}
    </div>
  );
};
// DetailMovieCard.PropTypes ={
//   data: PropTypes.any,  
// } 

export default DetailMovieCard;
