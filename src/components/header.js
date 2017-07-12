import React from 'react';

const Header = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1 className="sans title"><strong>{props.title}</strong></h1>
        </div>
      </div>
    </div>
  )
}

export default Header;