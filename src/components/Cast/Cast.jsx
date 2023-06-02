import React from 'react';
// import PropTypes from 'prop-types'

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getMovieCastByIdFromApi } from '../../servises/api';

import NoActorPhoto from '../../images/no-photo-actor.png';
import Loader from 'components/Loader/Loader';

import { Ul, Li, Img, Thumb } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieCastByIdFromApi(movieId)
      .then(data => {
        console.log(data);
        if (data.cast.length === 0) {
          return;
        }
        setCast(data.cast);
      })
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <div>
      {showLoader && <Loader />}
      {!cast && <p>there is no cast</p>}
      {cast && (
        <Ul>
          {cast.map(actor => {
            let actorPhoto = NoActorPhoto;
            if (actor.profile_path) {
              actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
            }
            return (
              <Li key={actor.id}>
                <Thumb>
                  <Img srcSet={actorPhoto} alt={actor.name}></Img>
                </Thumb>
                <div>
                  <p>{actor.name}</p>
                </div>
              </Li>
            );
          })}
        </Ul>
      )}
    </div>
  );
};

// Cast.propTypes = {}

export default Cast;
