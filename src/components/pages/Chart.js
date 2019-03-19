import React from 'react'
import Plot from "react-plotly.js";

export default function Chart() {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+points',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={ {width: '100%', title: 'A Fancy Plot'} }
    />  
    )
  }
  