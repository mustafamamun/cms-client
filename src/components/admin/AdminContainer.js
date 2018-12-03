import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class AdminContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
          AdminContainer
        </h4>
      </div>
    );
  }
}

AdminContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
