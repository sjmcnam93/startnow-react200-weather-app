import React from 'react';
import Info from './components/Info';
import Search from './components/Search';
import History from './components/History';
import Tabs from './components/Tabs';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' id='header'>
          <h2 className='display-2 p-4'>
            City Weather
          </h2>
          <h6 className='lead p-4'>
            Check The Skies!
          </h6>
        </div>
        <Tabs />
        <Search />
        <div className='row'>
          <div className='col-6'>
            <Info />
          </div>
          <div className='col-6'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
