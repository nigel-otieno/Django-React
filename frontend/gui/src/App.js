import React, { Component } from 'react';
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import Like from './components/Like'

class App extends Component {
  render() { 
    return ( 
      <div>
        <Router>
          <CustomLayout >
            <Like />
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
     );
  }
}
 
export default App;
