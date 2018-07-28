import React from 'react';
import { updateHistory, 
         updateWeatherInfo } from '../Search/searchActions';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.clickTab = this.clickTab.bind(this);
  }

  clickTab(userInput) {
    const { dispatch } = this.props;
    dispatch(updateWeatherInfo(userInput));
    dispatch(updateHistory(userInput));
  };

  render() {
    return (
      <div className="btn-group" 
           role="group">
        <button onClick={() => this.clickTab('San Diego')} 
                type="button" 
                className="btn btn-primary">
                San Diego
        </button>
        <button onClick={() => this.clickTab('Tampa')} 
                type="button" 
                className="btn btn-primary">
                Tampa
        </button>
        <button onClick={() => this.clickTab('Silver Spring')} 
                type="button" 
                className="btn btn-primary">
                Silver Spring
        </button>
        <button onClick={() => this.clickTab('Ogden')} 
                type="button" 
                className="btn btn-primary">
                Ogden
        </button>
        <button onClick={() => this.clickTab('Rexburg')} 
                type="button" 
                className="btn btn-primary">
                Rexburg
        </button>
      </div>
    );
  };
};
