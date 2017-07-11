import React, {Component} from 'react';

export default class Node extends Component {
  render() {
    let childNodes = null;
    
    if(this.props.children) {
      childNodes = this.props.children.map(childNode => {
        return (
          <Node node={childNode} children={childNode.children} key={childNode.id} />
        );
      });
    }

    return (
      <li>
        {this.props.node.name}
        {childNodes ? <ul>{childNodes}</ul> : null}
      </li>
    );
  }
}