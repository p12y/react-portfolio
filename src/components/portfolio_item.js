import React from 'react';
import List from './list';

const PortfolioItem = props => {
  const {title, description, listItems, img_url, url} = props;
  return (
    <div className="row mono portfolio-item">
      <div className="col-md-6">
        <h3 className="sans project-title">{title}</h3>
        <p>{description}</p>
        <p className="sans">Features:</p>
        <List items={listItems}/>
      </div>

      <div className="col-md-6">
        <a href={url} target="_blank" rel="noopener noreferrer"><img className="img-responsive" alt="" src={img_url} /></a>
      </div>
    </div>
  )
};

export default PortfolioItem;