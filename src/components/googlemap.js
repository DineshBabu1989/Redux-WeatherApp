import React, { Component } from "react";
let google = window.google;
class GoogleMap extends Component {
  // don't use state here , it will make the app unstable
  mapLoader(location) {
    let map = new google.maps.Map(this.refs.mapholder, {
      zoom: 12,
      center: location
    });
    let marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }

  componentDidMount(props) {
    //map is rendered for the first input
    var location = { lat: this.props.lat, lng: this.props.lon };
    {
      this.mapLoader(location);
    }
    //console.log("componentdidmount: "+this.props.lat);
  }

  componentWillReceiveProps(nextProps) {
    // new props are received and map is rendered for the second input
    var location = { lat: nextProps.lat, lng: nextProps.lon };
    {
      this.mapLoader(location);
    }
    //console.log("componentwillreceive props: "+nextProps.lat);
  }

  render() {
    const width = "100%";
    const height = "300px";
    var mapStyle = {
      width,
      height
    };

    return <div style={mapStyle} ref="mapholder" />;
  }
}
export default GoogleMap;
