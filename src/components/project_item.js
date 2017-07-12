import React, {Component} from 'react';

export default class ProjectItem extends Component {
  render() {
    return (
          <div className="col-md-4 text-center project-item">
            <img className="img-rounded" src={this.props.img_url} />
            <p className="project-item-description">{this.props.description}</p>
          </div>
    )
  }
}
