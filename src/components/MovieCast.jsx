import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../assets/scss/pages/detailsCard.scss';

const DetailCard = () => {  
  const { id } = useParams();
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = '96790888162847f13470addb92a79997';
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
  const imgUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [castResponse] = await Promise.all([fetch(castUrl)]);

        if (!castResponse.ok) {
          throw new Error(
            `Network responses were not ok: 
            Cast Response: ${castResponse.status}`
          );
        }

        const castData = await castResponse.json();

        setCastData(castData.cast);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [castUrl]);

  if (loading) {
    return <p>Loading...</p>;
  }
  const limitedItems = castData.slice(0, 5);
  return (
    <div className="detail__cast">
      {limitedItems.map((prsn, index) => {
        return (
          <div className="detail__cast__card" key={index}>
            <figure className="detail__imgcont">
              <img
                src={imgUrl + prsn.profile_path}
                alt=""
                className="detail__cast__img"
              />
            </figure>
            <h3 className="detail__cast__name">{prsn.name}</h3>
            <h4 className="detail cast__charct">{prsn.character}</h4>
          </div>
        );
        // console.log(prsn.name)
      })}
    </div>
  );
};

export default DetailCard;
