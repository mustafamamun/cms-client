import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class NewContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        NewContainer
        </h4>
      </div>
    );
  }
}

NewContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
