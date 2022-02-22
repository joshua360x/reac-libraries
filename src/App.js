// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import arrayData from './arrayData';
// import averCreditCardNum from './dataChange';


function App() {
  // console.log(arrayData);
  return (
    <div className="App">
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          // tickValues={[1, 2, 3, 4, 5, 6]}
          tickFormat={(gen) => `${gen}`}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `${x}`}
        />
        <VictoryBar
          data={arrayData}
          // data accessor for x values
          x="gender"
          // data accessor for y values
          y="work_for"
          alignment="start"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default App;
