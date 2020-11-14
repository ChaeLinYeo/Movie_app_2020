import React from 'react';
import axios from 'axios'; //영화 데이터를 로딩하기 위해 자바스크립트의 fetch()대신 axios 이용
import Movie from '../components/Movie';//Movie 컴포넌트를 임포트
import './Home.css';

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [], // state. 아래의 movies와는 다른 변수이다!
  };

  getMovies = async () => { //자바스크립트에게 getMovies()함수는 시간이 필요하고
    const {
      data: {
        data: {movies}, //axios.get()의 결과를 저장할 변수
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");//axios.get()의 실행을 기다려달라고 말해주는것
    //console.log(movies)
    //this.setState({movies: movies})// 앞의 movies는 state, 뒤의 movies는 구조 분해 할당으로 얻은 영화 데이터가 있는 변수. 
    this.setState({movies, isLoading: false});//키와 대입할 변수의 값이 같으면 하나로 축약 가능.
    //위와 같이 하여 state의 movies: []에 영화 데이터 저장.
    //isLoading이 false에서 true가 되면 API에서 데이터 로딩 완료.
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className = "loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              /> //여기서 Movie 컴포넌트 출력
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;