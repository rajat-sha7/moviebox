import { useState, useEffect } from 'react';
import MovieCard from './movieCard';
import { Link } from 'react-router-dom';
// import DetailMovieCard from './DetailedMovieCard';
import MovieSlider from './MovieSlider';

function FetchAPi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const apiKey = '96790888162847f13470addb92a79997';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNo}`;
  const imgUrl = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [url, pageNo]);

  if (loading) {
    return <p>Loading...</p>;
  }
  // const sliderIDs= [];
  // const sliderData = ()=>{
  //   data.map((elem)=>{
  //     sliderIDs.push(elem.id)
  //   })
  //   const orgSliderID = sliderIDs.slice(0, 5);
  //   console.log(orgSliderID);
  // }
  return (
    <div className='homepage'>
      <MovieSlider data={data}/>
      <div className="card__wrapper">
        {data.map((item, index) => {
          return (
            <>                
              <Link to={`/${item.id}`} className="card">
                <MovieCard
                  key={index}
                  data={item}
                  title={item.title}
                  id={item.id}
                  img={imgUrl + item.poster_path}
                />
              </Link>
            </>
          );
        })}
      </div>
      <h6>Page No : {pageNo}</h6>
      <div className="card__wrapper__btns">
        <button
          className="btn"
          onClick={() => setPageNo((pageNo) => pageNo - 1)}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={() => setPageNo((pageNo) => pageNo + 1)}
        >
          Next
        </button>
      </div>
      {/* <Pagination pageNo={pageNo} setPageNo={setPageNo}/> */}

    </div>
  );
}

export default FetchAPi;
