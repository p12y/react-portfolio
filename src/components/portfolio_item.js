import React, {Component} from 'react';
import List from './list';

const PortfolioItem = props => {
  const {title, description, listItems, img_url} = props;
  return (
    <div className="row mono portfolio-item">
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
  )
};

export default PortfolioItem;