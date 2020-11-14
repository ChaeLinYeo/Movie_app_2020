import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const{location, history}=this.props;
        if (location.state == undefined){   //location.state가 없는 경우(카드를 누르지 않고 주소창에서 디테일로 이동할경우)
            history.push('/');  //Home으로 이동시킴

        }
    }

    render(){
        const {location}=this.props;
        console.log(location)
        if (location.state){
            return (
            <span>
                <center>
                <img className="poster" src={location.state.poster}/>
                </center>
                <span>
                    <h1>{location.state.title} ({location.state.year})</h1>
                    Rating : {location.state.rating}/10
                    <br></br>
                    Runtime : {location.state.runtime}
                    <h3>Genre</h3>
                    {location.state.genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>;
                    })}
                    <h3>Description</h3>
                    {location.state.summary}
                    {location.state.description_full}
                    <h3>Synopsis</h3>
                    {location.state.synopsis}
                </span>
            </span>
            );
        }else{
            return null;
        }
    }
}

export default Detail;