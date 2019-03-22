import React from 'react'
// import uuid from 'uuid';
import Plot from "react-plotly.js";

export default function Chart(props) {

  const movies = props.data.map(element => element.movie);
  const minutes_in = props.data.map(element => element.minutes_in);
  const words = props.data.map(element => element.words);

  return (
    <div>
      <Plot
        data={[
          {
            x: movies,
            y: minutes_in,
            type: 'scatter',
            text: words,
            mode: 'markers',
            marker: { color: 'blue' },
          }
        ]}
        layout={{ width: '100%', height: '400px', title: 'Every Curse In A Tarantino Movie'}}
        config={{ displayModeBar: false }}
      />
      <ul>
          <li>hello</li>
      </ul>
    </div>
      
    );
  }
  