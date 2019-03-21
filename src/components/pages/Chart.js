import React from 'react'
// import uuid from 'uuid';
import Plot from "react-plotly.js";

export default function Chart(props) {
  const movies = props.data.map(element => element.movie);
  const minutes_in = props.data.map(element => element.minutes_in);
  const words = props.data.map(element => element.words);

  return (
      <Plot
        data={[
          {
            x: movies,
            y: minutes_in,
            type: 'scatter',
            text: props.data.movie,
            mode: 'points',
            marker: { color: 'red' },
          }
        ]}
        layout={{ width: '100%', title: 'A Fancy Plot' }}
      />
      
    );
  }
  