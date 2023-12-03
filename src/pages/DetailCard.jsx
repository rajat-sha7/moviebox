import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DetailedMovieCard from '../components/DetailedMovieCard';
import MovieCast from '../components/MovieCast'
import Popup from '../components/Popup';
Popup
const DetailCard = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const apiKey = '96790888162847f13470addb92a79997';
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieResponse] = await Promise.all([fetch(movieUrl)]);

        if (!movieResponse.ok) {
          throw new Error(
            `Network responses were not ok: 
            Movie Response: ${movieResponse.status}`
          );
        }

        const movieData = await movieResponse.json();

        setMovieData(movieData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieUrl]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>      
      <DetailedMovieCard data={movieData}/>
      <MovieCast />
      <Popup />
    </div>
  )
}

export default DetailCard