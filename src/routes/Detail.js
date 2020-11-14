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
        if (location.state){
            return <span>{location.state.title}</span>;
        }else{
            return null;
        }
    }
}

export default Detail;