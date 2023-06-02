import React from 'react';
// import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getMovieReviewsByIdFromApi } from '../../servises/api';

import { Ul } from './Reviews.styled';
import Loader from 'components/Loader/Loader';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieReviewsByIdFromApi(movieId)
      .then(data => {
        console.log(data);
        if (data.results.length === 0) {
          return;
        }
        setReviews(data.results);
      })
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <div>
      {showLoader && <Loader />}
      {!reviews && <p>there is no reviews</p>}
      {reviews && (
        <Ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
              </li>
            );
          })}
        </Ul>
      )}
    </div>
  );
};

// Reviews.propTypes = {}

export default Reviews;
