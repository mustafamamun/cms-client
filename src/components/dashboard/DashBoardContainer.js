import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class DashBoardContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
          DashBoardContainer
        </h4>
      </div>
    );
  }
}

DashBoardContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
