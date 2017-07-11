import React, {Component} from 'react';
import Node from './node';

export default class List extends Component {
  render() {
    let nodes = this.props.skills.map(skill => {
      return <Node node={skill} children={skill.children} key={skill.id} />;
    });
    
    return (
    <ul>
      {nodes}
    </ul>
    );
  }
}