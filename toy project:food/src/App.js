import React from 'react'
import PropTypes from 'prop-types'

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodLike = [
  {
    id : 1,
    name : 'chocolate',
    image : 'http://img.vogue.co.kr/vogue/2015/06/style_5576a64861fc3.jpg',
    rating : 5  
  },
  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://images.chosun.com/resizer/LqiOo-kFtKiAUawSeNYkIGIisaQ=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg',
    rating : 4.9
  },
  {
    id : 3,
    name : 'Gimbap',
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/440px-Vegetable_gimbap.jpg',
    rating : 4
  }
];

function App() {
  return (
    <div>
      {foodLike.map(dish =>(
        <Food key={dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
