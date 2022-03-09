import React, { Component } from 'react';

import './Icon.scss';

class Icon extends Component {
  render() {
    const { info, remove, edit, save } = this.props;
    return (
      <i
        className={`icon-feature fa-solid ${
          info && 'fa-info icon-feature-info'
        } ${save && 'fa-check icon-feature-save'} ${
          remove && 'fa-trash-can icon-feature-remove'
        } ${edit && 'fa-pen-to-square icon-feature-edit'}`}
      ></i>
    );
  }
}

export default Icon;
