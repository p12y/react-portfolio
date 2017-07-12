import React, {Component} from 'react';
import List from './list';

class PortfolioItem extends Component {
 render() {
  const {title, description, listItems, img_url} = this.props;
  return (
    <div className="row mono">
      <div className="col-md-6">
        <h3 className="sans project-title">{title}</h3>
        <p>{description}</p>
        <p className="sans">Features:</p>
        <List items={listItems}/>
      </div>

      <div className="col-md-6">
        <img src={img_url} />
      </div>
    </div>
  );
 }
}

export default PortfolioItem;