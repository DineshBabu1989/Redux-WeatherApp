import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import { fetchweather } from "../actions/actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      countryCode: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    //sets state based on name property and value of form inputs
    this.setState({ [e.target.name]: e.target.value });
    console.log(`${e.target.name}:${e.target.value}`);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchweather(this.state.city, this.state.countryCode);
    this.setState({
      city: "",
      countryCode: ""
    });
  }

  render() {
    return (
      <div>
        <Form
          className="col-xs-12 col-md-12 col-lg-12"
          onSubmit={this.handleSubmit}
        >
          <FormGroup>
            <ControlLabel>City:</ControlLabel>
            <FormControl
              type="text"
              name="city"
              placeholder="City Name"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <ControlLabel>Country Code:</ControlLabel>
            <FormControl
              type="text"
              name="countryCode"
              placeholder="Country Code ISO Eg:IN for INDIA ,US for USA"
              value={this.state.countryCode}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
// Form inputs are sent to actions
const mapDispatchToProps = dispatch => ({
  fetchweather: (city, countryCode) => dispatch(fetchweather(city, countryCode))
});

export default connect(null, mapDispatchToProps)(SearchBar);
