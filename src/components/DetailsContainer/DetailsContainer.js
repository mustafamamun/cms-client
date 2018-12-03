import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class DetailsContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
          DetailsContainer
        </h4>
      </div>
    );
  }
}

DetailsContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
