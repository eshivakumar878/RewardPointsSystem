import React from 'react';
import './App.css';
import CustRewardinfo from './Component/CustRewardInfo';
import TransactionHistory from './Component/TransactionHistory';
import TotalRewards from './Component/TotalRewards';
import '@progress/kendo-theme-default/dist/all.css';
import 'handsontable/dist/handsontable.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Reward Points System</h1>
          <ul>
            <li><Link to={'CustRewardinfo'}>Rewards Points Summary by Month</Link></li>
            <li><Link to={'TotalRewards'}>Rewards Points Summary by Customer</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={CustRewardinfo} />
            <Route path='/CustRewardinfo' component={CustRewardinfo} />
            <Route path='/TotalRewards' component={TotalRewards} />
            <Route path='/TransactionHistory' component={TransactionHistory} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
