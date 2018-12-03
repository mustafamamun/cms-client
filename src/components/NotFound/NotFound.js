import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class NotFound extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
          NotFound
        </h4>
      </div>
    );
  }
}

NotFound.contextTypes = {
  t: PropTypes.func.isRequired,
};
