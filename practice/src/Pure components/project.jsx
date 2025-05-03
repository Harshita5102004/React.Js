import React, { PureComponent, Component } from 'react';

class CityDisplay extends PureComponent {
  render() {
    console.log('CityDisplay rendered');
    return <h2>🌆 City: {this.props.city}</h2>;
  }
}


class TempDisplay extends PureComponent {
  render() {
    console.log('TempDisplay rendered');
    return <h3>🌡️ Temperature: {this.props.temp}°C</h3>;
  }
}

export default class ProjectPC extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Delhi',
      temp: 35,
      clicks: 0,
    };
  }

  render() {
    const { city, temp, clicks } = this.state;

    return (
      <div style={{
        fontFamily: 'Arial',
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '12px',
        backgroundColor: '#f0f8ff',
        textAlign: 'center'
      }}>
        <h1>🌤️ Weather Dashboard</h1>

        <input
          type="text"
          value={city}
          onChange={(e) => this.setState({ city: e.target.value })}
          placeholder="Enter city"
        />
        <br /><br />

        <input
          type="number"
          value={temp}
          onChange={(e) => this.setState({ temp: parseInt(e.target.value) })}
          placeholder="Enter temp"
        />
        <br /><br />

        <hr />

        <CityDisplay city={city} />
        <TempDisplay temp={temp} />
      </div>
    );
  }
}
