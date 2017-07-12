import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import PortfolioItems from './portfolio_items';
import Header from './header';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid dark">
        <Header title={"My work"} />

        <div className="container work">
          <PortfolioItems />
        </div>

        <Header title={"Projects"} />
      </div>
    );
  }
}