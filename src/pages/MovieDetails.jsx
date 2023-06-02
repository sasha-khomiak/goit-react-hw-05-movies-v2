import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getMovieByIdFromApi } from '../servises/api';

import MovieCard from 'components/MovieCard/MovieCard';

import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieByIdFromApi(movieId)
      .then(data => {
        //   console.log('data', data);
        setMovieInfo(data);
      })
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <>
      {showLoader && <Loader />}
      {movieInfo && <MovieCard movieInfo={movieInfo} />}
    </>
  );
};

export default MovieDetails;
