import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Popup = () => {
  const { id } = useParams();
  const [movieVideo, setMovieVideo] = useState({});
  const [loading, setLoading] = useState(true);
  const apiKey = "96790888162847f13470addb92a79997";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieResponse] = await Promise.all([fetch(videoUrl)]);

        if (!movieResponse.ok) {
          throw new Error(
            `Network responses were not ok: 
            Movie Response: ${movieResponse.status}`
          );
        }

        const movieVideo = await movieResponse.json();

        setMovieVideo(movieVideo.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [videoUrl]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div>
        <h1>Hello</h1>
        {console.log("movieVideo", movieVideo )}
      </div>
    </>
  );
};

export default Popup;
