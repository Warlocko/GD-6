import React, { Component } from 'react';

class Hobbies extends Component {
  render() {
    return (
      <ul>
        {this.props.hobbies.map((hobby, i) => {
          return (
            <li key={i}>
              {hobby}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Hobbies;
