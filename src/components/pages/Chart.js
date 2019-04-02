import Plot from "react-plotly.js";
import React, { Component } from 'react';
import suicideData from "../../data/suicideData.json";
import FIFAdata from "../../data/FIFA.json";
import axios from "axios";

export class Chart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pop: [],
      dsKaggle: [],
      dsFIFA: [],
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

    const dsFinal = suicideData
      .filter(el => {
        return el.country === "Canada" && el.age === "25-34 years";
      })

    this.setState({ dsKaggle : dsFinal})

    this.setState({ dsFIFA : FIFAdata.filter(el => {
      return el.Club === "FC Barcelona";
    })})

    console.log(this.state.dsFIFA)
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

  plot4() {

    const age = this.state.dsFIFA.map(element => element.Age);
    const rating = this.state.dsFIFA.map(element => element.Overall);
    const name = this.state.dsKaggle.map(element => element.Name);

    return (
      <div>
        <Plot
          data={[
            {
              x: age,
              y: rating,
              type: "scatter",
              mode: "markers+text",
              text: name,
              textposition: 'top center',
              textfont: {
                family: 'Raleway, sans-serif'
              },
              marker: {
                color: "blue"
              }
            }
          ]}
          layout={{
            width: "100%",
            height: "600px",
            title: "FC Barcelona (Rating vs Age)"
          }}
          config={{ displayModeBar: false }}
        />
      </div>
    );

  }

  plot3() {

    const year = this.state.dsKaggle.map(element => element.year);

    const rateM = this.state.dsKaggle
      .filter(el => {
        return el.sex === "male";
      })
      .map(element => element.suicides_no)

    const rateF = this.state.dsKaggle
      .filter(el => {
        return el.sex === "female";
      })
      .map(element => element.suicides_no)

    const GDP = this.state.dsKaggle
      .filter(el => {
        return el.sex === "female";
      })
      .map(element => element['gdp_per_capita ($)']/1000)

    return (
      <div>
        <Plot
          data={[
            {
              x: year,
              y: rateM,
              type: "scatter",
              name: "Male Suicides",
              mode: "markers",
              marker: {
                color: "blue"
              }
            },
            {
              x: year,
              y: rateF,
              type: "scatter",
              name: "Female Suicides",
              mode: "markers",
              marker: {
                color: "pink"
              }
            },
            {
              x: year,
              y: GDP,
              type: "line",
              name: "GDP per capita ($1000s)",
              marker: {
                color: "red"
              }
            }
          ]}
          layout={{
            width: "100%",
            height: "600px",
            title: "Suicide # over Time"
          }}
          config={{ displayModeBar: false }}
        />
      </div>
    );

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
        {this.plot4()}
        {this.plot3()}
      </div>
    );
  }
}

export default Chart;  