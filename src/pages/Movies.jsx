import Title from 'components/Title/Title';
import SearchingForm from '../components/SearchingForm/SearchingForm';

import { useState, useEffect } from 'react';

import { getMoviesByQueryFromApi } from '../servises/api';

import { useSearchParams } from 'react-router-dom';

import MoviesLayout from 'components/MoviesLayout/MoviesLayout';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  // const [query, setQuery] = useState(null);
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // console.log(query);

    if (query) {
      setShowLoader(true);
      getMoviesByQueryFromApi(query)
        .then(data => {
          setArrayOfMovies(data.results);
        })
        .finally(() => setShowLoader(false));
    }
  }, [query]);

  const onSubmitForm = res => {
    setSearchParams({ query: res });

    // setQuery(res);
    // console.log(res);
    setShowLoader(true);
    getMoviesByQueryFromApi(res)
      .then(data => {
        setArrayOfMovies(data.results);
      })
      .finally(() => setShowLoader(false));
  };

  return (
    <div>
      {showLoader && <Loader />}
      <Title text="Searching movie" />
      <SearchingForm onSubmit={onSubmitForm} />
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </div>
  );
};

export default Movies;
