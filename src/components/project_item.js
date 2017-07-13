import React, {Component} from 'react';

export default class ProjectItem extends Component {
  render() {
    return (
          <div className="col-md-4 text-center project-item">
            <a href={this.props.url} target="_blank" rel="noopener noreferrer"><img alt="" className="img-rounded img-responsive" src={this.props.img_url} /></a>
            <p className="project-item-description"><span className="white-underline"><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title}</a></span> {this.props.description}</p>
          </div>
    )
  }
}
