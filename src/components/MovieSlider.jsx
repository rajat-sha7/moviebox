// import React from 'react'
import '../assets/scss/components/movieSlider.scss'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import DetailMovieCard from './DetailedMovieCard';

const MovieSlider = ({ data }) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 1000,   
  };
  return (
    <div>
      <Splide hasTrack={ false }
      options={options} aria-labelledby="autoplay-example-heading">
        <SplideTrack hasTrack={ false }>
          <SplideSlide>
            <DetailMovieCard data={data[0]} />
          </SplideSlide>
          <SplideSlide>
            <DetailMovieCard data={data[1]} />
          </SplideSlide>
          <SplideSlide>
            <DetailMovieCard data={data[2]} />
          </SplideSlide>
          <SplideSlide>
            <DetailMovieCard data={data[3]} />
          </SplideSlide>
          <SplideSlide>
            <DetailMovieCard data={data[4]} />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default MovieSlider;
