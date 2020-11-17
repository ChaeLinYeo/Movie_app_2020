import React from 'react';
import axios from 'axios'; //영화 데이터를 로딩하기 위해 자바스크립트의 fetch()대신 axios 이용
import Movie from '../components/Movie';//Movie 컴포넌트를 임포트
import './Home.css';
import styled from 'styled-components'

const Div = styled.div`
html,
body {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #0d1019;
  /* Old browsers */
  background: -moz-linear-gradient(-45deg, #0d1019 0%, #161b29 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #0d1019 0%, #161b29 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #0d1019 0%, #161b29 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#0d1019', endColorstr='#161b29', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
}

.container {
  width: 20vw;
  height: 20vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
}

/* Compressing bars style */

.bars-common {
  height: 4vw;
  max-height: 100%;
  width: 1vw;
  margin: auto;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.bar-one {
  left: 0;
  right: 4vw;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
}

.bar-two {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
}

.bar-three {
  left: 4vw;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
}

/* Rotating squares style */

.squares-common {
  height: 8vw;
  max-height: 100%;
  width: 8vw;
  margin: auto;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0%;
}

.square-one {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
}

.square-two {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
}

/* Animation */
/* Compressing bars animation */

.bar-one {
  animation: barOne 1s .33s infinite linear;
  -moz-animation: barOne 1s .33s infinite linear;
  /* Firefox */
  -webkit-animation: barOne 1s .33s infinite linear;
  /* Safari and Chrome */
  -o-animation: barOne 1s .33s infinite linear;
  /* Opera */
}

@keyframes barOne {
  0%,
  100% {
    box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
  }
  50% {
    height: 2.5vw;
    box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;
  }
}

.bar-two {
  animation: barTwo 1s .66s infinite linear;
  -moz-animation: barTwo 1s .66s infinite linear;
  /* Firefox */
  -webkit-animation: barTwo 1s .66s infinite linear;
  /* Safari and Chrome */
  -o-animation: barTwo 1s .66s infinite linear;
  /* Opera */
}

@keyframes barTwo {
  0%,
  100% {
    box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
  }
  50% {
    height: 2.5vw;
    box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;
  }
}

.bar-three {
  animation: barThree 1s .99s infinite linear;
  -moz-animation: barThree 1s .99s infinite linear;
  /* Firefox */
  -webkit-animation: barThree 1s .99s infinite linear;
  /* Safari and Chrome */
  -o-animation: barThree 1s .99s infinite linear;
  /* Opera */
}

@keyframes barThree {
  0%,
  100% {
    box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
  }
  50% {
    height: 2.5vw;
    box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;
  }
}

/* Rotating squares animation */

.square-one {
  animation: squareOne 2s .99s infinite linear;
  -moz-animation: squareOne 2s .99s infinite linear;
  /* Firefox */
  -webkit-animation: squareOne 2s .99s infinite linear;
  /* Safari and Chrome */
  -o-animation: squareOne 2s .99s infinite linear;
  /* Opera */
}

@keyframes squareOne {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
}

.square-two {
  animation: squareTwo 2s .99s infinite linear;
  -moz-animation: squareTwo 2s .99s infinite linear;
  /* Firefox */
  -webkit-animation: squareTwo 2s .99s infinite linear;
  /* Safari and Chrome */
  -o-animation: squareTwo 2s .99s infinite linear;
  /* Opera */
}

@keyframes squareTwo {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
`

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
    console.log(movies)
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
      <div className="area" >
        
      </div >
        {isLoading ? (
          <Div>
          <div className = "loader">
            <span className="loader__text">
              <div id = "cupcake" className = "box">
                <div className="bars-common bar-one"></div>
                <div className="bars-common bar-two"></div>
                <div className="bars-common bar-three"></div>
                <div className="squares-common square-one"></div>
                <div className="squares-common square-two"></div>
              </div>
            </span>
          </div>
          </Div>
        ) : (
          <div className="movies">
            {/* <span>Theator</span> */}
            {/* <h1 contenteditable spellcheck="false">theater open</h1> */}
            {/* <div className="container"> */}
            <div className="sign">
                <div className="neon-blue" id="title">Wel<span id="fade">come</span> To</div>
                <div className="neon-blue">  <span className="neon-purple" id="trav">Thea</span>  <span className="neon-purple">ter</span></div>
            </div>
            {/* </div> */}
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
                description_full = {movie.description_full}
                synopsis = {movie.synopsis}
                rating = {movie.rating}
                runtime = {movie.runtime}
                trailer={movie.yt_trailer_code}
                background={movie.background_image}
                yt_trailer_code = {movie.yt_trailer_code}
              /> //여기서 Movie 컴포넌트 출력
            ))}
          </div>
        )}
      </section>
    );
  }
}





export default Home;