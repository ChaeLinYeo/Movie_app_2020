import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
width:100%;
height:1920px;
margin:auto;
position:relative;
    iframe{
        position:absolute;
        width: 60%;
        height: 40vh;
        margin:auto;
        transform:translateX(-50%);
        top:6%;
        left:50%;
        border-radius:10px;     
        z-index:10;
    }
    .text{
        position:absolute;
        width:60%;
        height:auto;
        padding:30px;
        border-radius:10px;
        top:25%;
        transform:translateX(-50%);
        left:50%;
        background:rgba(0,0,0,0.6);
        h1{
            padding-bottom:20px;
            font-size:40px;
            font-weight:bold;
            color:white;
        }
        h2{
            font-size:30px;
            padding-bottom:10px;
            color:lightpink
        }
        h3{
            font-size:20px;
            color:white
        }
    }
    @media only screen and (max-width:1200px) {
        width:100%;
        height:100%;
        position:static;
        margin:auto;
        iframe{
            position:static;
            width:100%;
            max-height: 80vh;
            top:0;
            left:0;
            transform:none;
        }
        .text{position:static;
            margin:1vh auto 0 auto;
            width:100%;
            height:auto;
            top:0;
            left:0;
            transform:none;
            h1{font-size:30px}
            h2{font-size:20px}
            h3{font-size:20px}
        }
    }

    
`

class Detail extends React.Component{
    componentDidMount(){
        const{location, history}=this.props;
        if (location.state === undefined){   //location.state가 없는 경우(카드를 누르지 않고 주소창에서 디테일로 이동할경우)
            history.push('/');  //Home으로 이동시킴

        }
    }

    render(){
        const {location}=this.props;
        console.log(location)
        if (location.state){
            return (
            // <span>
            //     <center>
            //     <img className="poster" src={location.state.poster}/>
            //     </center>
            //     <span>
            //         <h2>{location.state.title} ({location.state.year})</h2>
            //         Rating : {location.state.rating}/10
            //         <br></br>
            //         Runtime : {location.state.runtime}
            //         <h3>Genre</h3>
            //         {location.state.genres.map((genre, index) => {
            //             return <li key={index} className="movie__genre">{genre}</li>;
            //         })}
            //         <iframe title={location.state.trailer} src={`https://www.youtube.com/embed/${location.state.trailer}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            //         <h3>Description</h3>
            //         {location.state.summary}
            //         {location.state.description_full}
            //         <h3>Synopsis</h3>
            //         {location.state.synopsis}
            //     </span>
            // </span>
            <Div style={{background:`URL(${location.state.background})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    }}>
                
                <iframe 
                title={location.state.trailer} 
                src={`https://www.youtube.com/embed/${location.state.trailer}`} 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen />
                <div className='text'>
                    <h1>{location.state.title}</h1>
                    <h2>{location.state.year} {location.state.genres.map(i=>i)}</h2>
                    <h3>Rating : {location.state.rating}/10</h3>
                    <h3>Runtime : {location.state.runtime} mins</h3>
                    <h3>{location.state.genres.map((genre, index) => {
                            return <li key={index} className="movie__genre">{genre}</li>;
                        })}</h3>
                    <h2>Synopsis</h2>
                    <h3>{location.state.synopsis}</h3>
                </div>
            </Div>
            );
        }else{
            return null;
        }
    }
}

// function Detail({ location }) {
//     return (
//         <Div style={{background:`URL(${location.state.background})`,
//                     backgroundRepeat:'no-repeat',
//                     backgroundSize:'cover'}}>
//             <iframe title={location.state.trailer} src={`https://www.youtube.com/embed/${location.state.trailer}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
//             <div className='text'>
//                 <h1>{location.state.title}</h1>
//                 <h2>{location.state.year} {location.state.genres.map(i=>i)}</h2>
//                 <h3>{location.state.summary.slice(0,400)}</h3>
//             </div>
//         </Div>
//     )}

export default Detail;