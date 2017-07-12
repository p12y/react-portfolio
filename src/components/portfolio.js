import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import PortfolioItems from './portfolio_items';
import Header from './header';
import ProjectItems from './project_items';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid dark">
        <Header title={"My work"} />
        <PortfolioItems />
        <Header title={"Projects"} />
        <ProjectItems />
      </div>
    );
  }
}