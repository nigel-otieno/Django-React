import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import { connect } from 'react-redux';
import * as actions from './store/actions/auth'


class App extends Component {
  render() { 
    return ( 
      <div>
        <Router>
          <CustomLayout >
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
     );
  }
}
 
export default connect()(App);
