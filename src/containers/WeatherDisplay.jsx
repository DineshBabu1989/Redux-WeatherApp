import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineChart from '../components/chart.js';
import GoogleMap from '../components/googlemap';
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

    
renderList(weather,i){
    let temperature;
    const city = weather.city.name;
    const tempData = weather.list.map(weather => weather.main.temp );
    const dateData = weather.list.map(weather => weather.dt_txt );
    const { lat , lon } = weather.city.coord;
    return (
    <div key = {i} className = "weather-block col-xs-12 col-md-12 col-lg-12">
       <div className = "row">
        <div className = "col-xs-12 col-md-6 col-lg-6">
            <GoogleMap lat ={lat} lon = {lon} />    
        </div>      
        <div className = "col-xs-12 col-md-6 col-lg-6">
            <LineChart data = {tempData} labels ={dateData} city={city}/>    
        </div>        
      </div>           
    </div>
    
    );
}  

    
render(){
     
    return (
    <div>
    {this.props.weather.map(this.renderList)}
   
    </div>
    );
   
}

}

const mapStateToProps = state => ({
weather: state.weather 

})
    

export default connect(mapStateToProps)(WeatherDisplay);
