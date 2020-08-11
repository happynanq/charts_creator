import React from 'react';
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Content from './Components/Content/Content';
import Help from './Components/Help/Help';
// import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, ReferenceLine, ComposedChart, Legend } from 'recharts';

function App() {
  let data = [
    {name:"A", uv:400, pv:4000, amt:2400},
    {name:"B", uv:3000, pv:3000, amt:2400},
    {name:"C", uv:4000, pv:3000, amt:2400},
  ]
  return (
    
    // <LineChart width={730} height={250} data={data}>
    //   <XAxis dataKey="name" />
    //   <YAxis  />
    //   <Tooltip />
    //   <Legend />
    //   <CartesianGrid stroke="#f5f5f5" />
    //   <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    //   {/* <Line type="monotone" dataKey="pv" stroke="#f0aac0" /> */}
    // </LineChart>
    <div>

      <Header/>
      
      <div className="container">

        <Switch >
        
          <Route path="/" exact>
            <Content/>
          </Route>

          <Route path="/help" exact>
            <Help/>
          </Route>

        </Switch>

      </div>
    </div>
  );
}

export default App;
