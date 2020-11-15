import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import {Link} from 'react-router-dom';
import {Card} from 'antd';

//Movie 컴포넌트는 state가 필요하지 않으므로 클래스형 컴포넌트가 아닌 함수형 컴포넌트로 작성
function Movie({title, year, summary, poster, genres, 
  description_full, synopsis, rating, runtime, trailer, background, yt_trailer_code}){
  return (
    <div className="movie">
      <Link
        to={{
          pathname:`/movie-detail/${trailer}`,
          // pathname: '/movie-detail',
          state: {
            year, 
            title, 
            summary, 
            poster, 
            genres, 
            description_full, 
            synopsis, 
            rating, 
            runtime,
            trailer,
            background,
            yt_trailer_code,
          },
        }}
      >
      <Card
          key={trailer}
          className = 'movie'
          hoverable
          cover={<img src={poster} alt={title} title={title} />}
      >
          <Card.Meta title={title + year} description={summary.slice(0, 140)+'...'} />
      </Card>
        {/* <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title>">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return <li key={index} className="movie__genre">{genre}</li>;
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div> */}
      </Link>
    </div>
  );
}

Movie.propTypes = { //API에서 넘겨받아올 데이터들
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description_full: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  trailer: PropTypes.string.isRequired,
};

export default Movie;