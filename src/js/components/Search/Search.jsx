import React from 'react';
import { findSearch, updateWeatherInfo, updateHistory } from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.searchCity = this.searchCity.bind(this);
    this.searchButton = this.searchButton.bind(this);
  };

  searchCity(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(findSearch(value));
  };

  searchButton() {
    const { dispatch } = this.props;
    const { userInput } = this.props;
    dispatch(updateWeatherInfo(userInput));
    dispatch(updateHistory(userInput));

  };

  render() {
    const { userInput } = this.props;
    return (
      <div>
        <div className="input-group input-group-sm">
          <input value={userInput} 
                 onChange={this.searchCity} 
                 className="form-control mb-3" />
          <div className="input-group-append">
            <button onClick={this.searchButton} 
                    className="input-group-text mb-3">
                    Go!
            </button>
          </div>
        </div>
      </div>
    );
  };
};