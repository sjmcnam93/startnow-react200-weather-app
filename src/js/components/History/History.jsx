import React from 'react';
export default class History extends React.Component {

  render() {
    return (
      <div>
        <div className='card' 
             id='search-card-border'>
          <div className='card-header' 
               id='search-card-header'>
            Search History
          </div>
          <div className='card-body' id='search-history-body'>
            <table className='table table-striped'>
              <tbody>
                {this.props.history.map(historyCity => (
                  <tr>
                    <td id='city-name' 
                        scope='col'>
                        {historyCity.cityName}
                        </td>
                    <td id='search-date' 
                        scope='col'>
                        {historyCity.searchDate}
                        </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
};
