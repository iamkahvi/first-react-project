import Plot from "react-plotly.js";
import React, { Component } from 'react';
import axios from "axios";

export class Chart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pop: [],
      census: [],
      name: ''
    }
  }
  
  componentDidMount() {
    axios
      .get(
        "http://api.worldbank.org/v2/country/CAN/indicator/SP.POP.TOTL?format=json"
      )
      .then(data => this.setState({ pop : data.data[1] }))

    this.setState({ name : 'Kahvi' })
  }

  dateList() {
    return (
      <ul>
        {this.state.pop.map(element => {
          return (
            <li> {element.date} </li>
          )
        })}
      </ul>
    )
  }

  plot1() {

    const movies = this.props.data.map(element => element.movie);
    const minutes_in = this.props.data.map(element => element.minutes_in);
    const words = this.props.data.map(element => element.words);

    return (
      <div>
        <Plot
          data={[
            {
              x: movies,
              y: minutes_in,
              type: "scatter",
              text: words,
              mode: "markers",
              marker: { color: "blue" }
            }
          ]}
          layout={{
            width: "100%",
            height: "400px",
            title: "Every Curse In A Tarantino Movie"
          }}
          config={{ displayModeBar: false }}
        />
      </div>
    );
  }

  plot2() {

    const years = this.state.pop.map(element => element.date);
    const population = this.state.pop.map(element => element.value);

    return (
      <div>
        <Plot
          data={[
            {
              x: years,
              y: population,
              type: "scatter",
              mode: "markers",
              marker: { color: "blue" }
            }
          ]}
          layout={{
            width: "100%",
            height: "400px",
          }}
          config={{ displayModeBar: false }}
        />
      </div>
    );
  }
  
  render() {

    

    return (
      <div>
        {this.plot1()}
        {this.plot2()}

        {/*         {this.dateList()}
         */}
      </div>
    );
  }
}

export default Chart;  