import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
//라우터는 사용자가 입력한 url을 통해 특정 컴포넌트를 불러준다.
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation'
import Detail from './routes/Detail';

function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      {/* <Route path="/movie-detail" component={Detail}/> */}
      <Route path='/movie-detail/:trailer' component={Detail}/>
    </HashRouter>
  )
}

export default App;